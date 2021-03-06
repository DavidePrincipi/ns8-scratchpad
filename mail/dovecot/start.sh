#!/bin/sh

#
# Copyright (C) 2021 Nethesis S.r.l.
# http://www.nethesis.it - nethserver@nethesis.it
#
# This script is part of NethServer.
#
# NethServer is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License,
# or any later version.
#
# NethServer is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with NethServer.  If not, see COPYING.
#

# Ensure mail homes root has proper ownership:
chown -c vmail:vmail /var/lib/vmail

envsubst '${AUTH_BIND_USERDN}' </etc/dovecot/dovecot-ldap.conf.ext.template >/etc/dovecot/dovecot-ldap.conf.ext

exec dovecot -F
