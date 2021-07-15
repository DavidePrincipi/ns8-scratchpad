# delete-route input Schema

```txt
http://schema.nethserver.org/traefik/delete-route-input.json
```

Configure a Promtail agent

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [delete-route-input.json](traefik/delete-route-input.json "open original schema") |

## delete-route input Type

`object` ([delete-route input](delete-route-input.md))

one (and only one) of

*   [Untitled undefined type in delete-route input](delete-route-input-oneof-0.md "check type definition")

*   [Untitled undefined type in delete-route input](delete-route-input-oneof-1.md "check type definition")

## delete-route input Examples

```json
{
  "loki_url": "http://10.135.0.3:3100/loki/api/v1/push"
}
```

```json
{
  "loki_instance": "loki1"
}
```

```json
{
  "loki_url": "http://10.135.0.3:3100/loki/api/v1/push",
  "auth": {
    "basic": {
      "user": "user",
      "password": "password"
    }
  }
}
```

```json
{
  "loki_url": "http://10.135.0.3:3100/loki/api/v1/push",
  "auth": {
    "token": "XXXXXXXXXXXXXXXXXX"
  }
}
```

# delete-route input Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [loki_url](#loki_url)           | `string` | Optional | cannot be null | [delete-route input](delete-route-input-properties-url-of-the-loki-instance.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/loki_url")                     |
| [loki_instance](#loki_instance) | `string` | Optional | cannot be null | [delete-route input](delete-route-input-properties-module-instance-name-of-the-loki-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/loki_instance") |
| [auth](#auth)                   | Merged   | Optional | cannot be null | [delete-route input](delete-route-input-properties-auth.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth")                                             |

## loki_url



`loki_url`

*   is optional

*   Type: `string` ([Url of the Loki instance](delete-route-input-properties-url-of-the-loki-instance.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-url-of-the-loki-instance.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/loki_url")

### loki_url Type

`string` ([Url of the Loki instance](delete-route-input-properties-url-of-the-loki-instance.md))

### loki_url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### loki_url Examples

```json
"http://10.135.0.3:3100/loki/api/v1/push"
```

## loki_instance



`loki_instance`

*   is optional

*   Type: `string` ([Module instance name of the Loki server](delete-route-input-properties-module-instance-name-of-the-loki-server.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-module-instance-name-of-the-loki-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/loki_instance")

### loki_instance Type

`string` ([Module instance name of the Loki server](delete-route-input-properties-module-instance-name-of-the-loki-server.md))

### loki_instance Examples

```json
"loki1"
```

## auth



`auth`

*   is optional

*   Type: `object` ([Details](delete-route-input-properties-auth.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-auth.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth")

### auth Type

`object` ([Details](delete-route-input-properties-auth.md))

one (and only one) of

*   [Untitled undefined type in delete-route input](delete-route-input-properties-auth-oneof-0.md "check type definition")

*   [Untitled undefined type in delete-route input](delete-route-input-properties-auth-oneof-1.md "check type definition")
