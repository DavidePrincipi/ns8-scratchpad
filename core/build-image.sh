#!/bin/bash

set -e
images=()
repobase="${REPOBASE:-ghcr.io/nethserver}"

# Reuse existing gobuilder-core container, to speed up builds
if ! buildah containers --format "{{.ContainerName}}" | grep -q gobuilder-core; then
    echo "Pulling Golang runtime..."
    buildah from --name gobuilder-core -v "${PWD}:/usr/src/core:Z" docker.io/library/golang:1.16-alpine
    buildah run gobuilder-core apk add g++ gcc
fi

# Reuse existing nodebuilder-core container, to speed up builds
if ! buildah containers --format "{{.ContainerName}}" | grep -q nodebuilder-core; then
    echo "Pulling NodeJS runtime..."
    buildah from --name nodebuilder-core -v "${PWD}:/usr/src/core:Z" docker.io/library/node:slim
fi

echo "Build statically linked Go binaries based on Musl..."
echo "1/2 agent..."
buildah run gobuilder-core sh -c "cd /usr/src/core/agent      && CGO_ENABLED=0 go build -v ."
echo "2/2 api-server..."
# Statically link libraries and disable Sqlite extensions that expect a dynamic loader (not portable across distros)
# Ref https://www.arp242.net/static-go.html
buildah run gobuilder-core sh -c "cd /usr/src/core/api-server && go build -v -ldflags=\"-extldflags=-static\" -tags sqlite_omit_load_extension ."

echo "Build static UI files with node..."
buildah run nodebuilder-core sh -c "cd /usr/src/core/ui       && npm install && npm run build"

echo "Download Logcli..."
logcli_tmp_dir=$(mktemp -d)
wget https://github.com/grafana/loki/releases/download/v2.2.1/logcli-linux-amd64.zip -P ${logcli_tmp_dir}
unzip ${logcli_tmp_dir}/logcli-linux-amd64.zip -d ${logcli_tmp_dir}

echo "Building the Core image..."
container=$(buildah from scratch)
reponame="core"
buildah add "${container}" imageroot /
buildah add "${container}" ${logcli_tmp_dir}/logcli-linux-amd64 /usr/local/sbin/logcli
rm -r ${logcli_tmp_dir}
trap "rm -rf ${logcli_tmp_dir}" EXIT
buildah add "${container}" agent/agent /usr/local/bin/agent
buildah add "${container}" api-server/api-server /usr/local/bin/api-server
buildah add "${container}" ui/dist /var/lib/nethserver/cluster/ui
buildah config --entrypoint=/ "${container}"
buildah commit "${container}" "${repobase}/${reponame}"
buildah rm "${container}"
images+=("${repobase}/${reponame}")

echo "Building the Redis image..."
container=$(buildah from docker.io/redis:6-alpine)
reponame="redis"
# Reset upstream volume configuration: it is necessary to modify /data contents with our .conf file.
buildah config --volume=/data- "${container}"
buildah run "${container}" sh <<EOF
mkdir etc

cat >etc/redis.acl <<EOR
user default on nopass sanitize-payload ~* &* +@all
EOR

cat >etc/redis.conf <<EOR
#
# redis.conf -- do not edit manually!
#
bind 127.0.0.1 ::1
port 6379
protected-mode no
save 5 1
aclfile "/data/etc/redis.acl"
dir "/data"
masteruser default
masterauth nopass
notify-keyspace-events AKE
EOR

EOF
buildah config --volume=/data '--cmd=[ "redis-server", "/data/etc/redis.conf" ]' "${container}"
buildah commit "${container}" "${repobase}/${reponame}"
buildah rm "${container}"
images+=("${repobase}/${reponame}")

if [[ -n "${CI}" ]]; then
    # Set output value for Github Actions
    printf "::set-output name=images::%s\n" "${images[*]}"
else
    printf "Publish the images with:\n\n"
    for image in "${images[@]}"; do printf "  buildah push %s docker://%s:latest\n" "${image}" "${image}" ; done
    printf "\n"
fi
