# delete-route input Schema

```txt
http://schema.nethserver.org/traefik/delete-route-input.json
```

Delete a HTTP route

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [delete-route-input.json](traefik/delete-route-input.json "open original schema") |

## delete-route input Type

`object` ([delete-route input](delete-route-input.md))

## delete-route input Examples

```json
{
  "loki_url": "http://10.135.0.3:3100/loki/api/v1/push"
}
```

```json
{
  "instance": "loki1"
}
```

# delete-route input Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [loki_url](#loki_url) | `string` | Optional | cannot be null | [delete-route input](delete-route-input-properties-url-of-the-loki-instance.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/loki_url")                |
| [instance](#instance) | `string` | Optional | cannot be null | [delete-route input](delete-route-input-properties-module-instance-name-of-the-loki-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/instance") |

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

## instance



`instance`

*   is optional

*   Type: `string` ([Module instance name of the Loki server](delete-route-input-properties-module-instance-name-of-the-loki-server.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-module-instance-name-of-the-loki-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/instance")

### instance Type

`string` ([Module instance name of the Loki server](delete-route-input-properties-module-instance-name-of-the-loki-server.md))

### instance Examples

```json
"loki1"
```
