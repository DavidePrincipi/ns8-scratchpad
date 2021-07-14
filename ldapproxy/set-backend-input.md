# set-backend input Schema

```txt
http://schema.nethserver.org/ldapproxy/set-backend-input.json
```

Configure the LDAP backend endpoint

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [set-backend-input.json](ldapproxy/set-backend-input.json "open original schema") |

## set-backend input Type

`object` ([set-backend input](set-backend-input.md))

## set-backend input Examples

```json
{
  "backend": "ldap1",
  "schema": "rfc2307",
  "host": "10.2.3.12",
  "port": 389,
  "tls": false,
  "tls_verify": false
}
```

```json
{
  "backend": "samba1",
  "schema": "ad",
  "host": "127.0.0.1",
  "port": 636,
  "tls": true,
  "tls_verify": false
}
```

# set-backend input Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                             |
| :------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [backend](#backend)       | `string`  | Required | cannot be null | [set-backend input](set-backend-input-properties-backend-name.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/backend")                  |
| [schema](#schema)         | `string`  | Required | cannot be null | [set-backend input](set-backend-input-properties-ldap-schema.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/schema")                    |
| [host](#host)             | `string`  | Required | cannot be null | [set-backend input](set-backend-input-properties-endpoint-ip-address.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/host")              |
| [port](#port)             | `integer` | Required | cannot be null | [set-backend input](set-backend-input-properties-endpoint-tcp-port.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/port")                |
| [tls](#tls)               | `boolean` | Required | cannot be null | [set-backend input](set-backend-input-properties-tls-connection.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/tls")                    |
| [tls_verify](#tls_verify) | `boolean` | Optional | cannot be null | [set-backend input](set-backend-input-properties-tls-certificate-validation.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/tls_verify") |

## backend

The backend module ID for local account providers, i.e. `host=127.0.0.1`. For remote account providers, just a meaningful word

`backend`

*   is required

*   Type: `string` ([Backend name](set-backend-input-properties-backend-name.md))

*   cannot be null

*   defined in: [set-backend input](set-backend-input-properties-backend-name.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/backend")

### backend Type

`string` ([Backend name](set-backend-input-properties-backend-name.md))

### backend Examples

```json
"samba1"
```

```json
"Azure"
```

## schema

Describe the LDAP tree structure of the backend.

`schema`

*   is required

*   Type: `string` ([LDAP schema](set-backend-input-properties-ldap-schema.md))

*   cannot be null

*   defined in: [set-backend input](set-backend-input-properties-ldap-schema.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/schema")

### schema Type

`string` ([LDAP schema](set-backend-input-properties-ldap-schema.md))

### schema Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"ad"`      |             |
| `"rfc2307"` |             |

## host

Host name or IP address of the LDAP backend

`host`

*   is required

*   Type: `string` ([Endpoint IP address](set-backend-input-properties-endpoint-ip-address.md))

*   cannot be null

*   defined in: [set-backend input](set-backend-input-properties-endpoint-ip-address.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/host")

### host Type

`string` ([Endpoint IP address](set-backend-input-properties-endpoint-ip-address.md))

## port

TCP port number of the LDAP backend

`port`

*   is required

*   Type: `integer` ([Endpoint TCP port](set-backend-input-properties-endpoint-tcp-port.md))

*   cannot be null

*   defined in: [set-backend input](set-backend-input-properties-endpoint-tcp-port.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/port")

### port Type

`integer` ([Endpoint TCP port](set-backend-input-properties-endpoint-tcp-port.md))

### port Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## tls

Connect the LDAP backend with TLS encryption

`tls`

*   is required

*   Type: `boolean` ([TLS connection](set-backend-input-properties-tls-connection.md))

*   cannot be null

*   defined in: [set-backend input](set-backend-input-properties-tls-connection.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/tls")

### tls Type

`boolean` ([TLS connection](set-backend-input-properties-tls-connection.md))

## tls_verify

If set to `true` the backend must provide a valid TLS certificate

`tls_verify`

*   is optional

*   Type: `boolean` ([TLS certificate validation](set-backend-input-properties-tls-certificate-validation.md))

*   cannot be null

*   defined in: [set-backend input](set-backend-input-properties-tls-certificate-validation.md "http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/tls_verify")

### tls_verify Type

`boolean` ([TLS certificate validation](set-backend-input-properties-tls-certificate-validation.md))
