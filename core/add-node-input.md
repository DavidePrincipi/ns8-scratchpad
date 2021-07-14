# add-node input Schema

```txt
http://schema.nethserver.org/cluster/add-node-input.json
```

Input schema of the add-node action

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-node-input.json](cluster/add-node-input.json "open original schema") |

## add-node input Type

`object` ([add-node input](add-node-input.md))

## add-node input Examples

```json
{
  "endpoint": "",
  "listen_port": 55820,
  "node_pwh": "b12f4f5137c4c6b4ef2efd936b88119c4af8356d4e9c3a31a18cd4a88effc41d",
  "public_key": "XCVh3GCRqMcmIgpHhsbCL7Usm7Lm7Hb7bsS5LTSz/Dc="
}
```

# add-node input Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                    |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [node_pwh](#node_pwh)       | `string`  | Required | cannot be null | [add-node input](cluster-definitions-redis-password.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/node_pwh")       |
| [public_key](#public_key)   | `string`  | Required | cannot be null | [add-node input](add-node-input-properties-public_key.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/public_key")   |
| [endpoint](#endpoint)       | `string`  | Required | cannot be null | [add-node input](add-node-input-properties-endpoint.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/endpoint")       |
| [listen_port](#listen_port) | `integer` | Required | cannot be null | [add-node input](add-node-input-properties-listen_port.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/listen_port") |

## node_pwh

Redis SHA256 hashed password for Users, Cluster, Nodes and Modules

`node_pwh`

*   is required

*   Type: `string` ([Redis password](cluster-definitions-redis-password.md))

*   cannot be null

*   defined in: [add-node input](cluster-definitions-redis-password.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/node_pwh")

### node_pwh Type

`string` ([Redis password](cluster-definitions-redis-password.md))

### node_pwh Constraints

**maximum length**: the maximum number of characters for this string is: `64`

**minimum length**: the minimum number of characters for this string is: `64`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-f0-9]{64}$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-f0-9%5D%7B64%7D%24 "try regular expression with regexr.com")

### node_pwh Examples

```json
"73cb3858a687a8494ca3323053016282f3dad39d42cf62ca4e79dda2aac7d9ac"
```

## public_key

Node public key of the WireGuard VPN

`public_key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [add-node input](add-node-input-properties-public_key.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/public_key")

### public_key Type

`string`

## endpoint

Announce the public WireGuard VPN endpoint of the node

`endpoint`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [add-node input](add-node-input-properties-endpoint.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/endpoint")

### endpoint Type

`string`

## listen_port

WireGuard VPN listening port number. Can differ from the port number announced by `endpoint`

`listen_port`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [add-node input](add-node-input-properties-listen_port.md "http://schema.nethserver.org/cluster/add-node-input.json#/properties/listen_port")

### listen_port Type

`integer`
