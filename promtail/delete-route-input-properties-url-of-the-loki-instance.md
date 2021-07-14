# Url of the Loki instance Schema

```txt
http://schema.nethserver.org/traefik/delete-route-input.json#/properties/loki_url
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [delete-route-input.json*](traefik/delete-route-input.json "open original schema") |

## loki_url Type

`string` ([Url of the Loki instance](delete-route-input-properties-url-of-the-loki-instance.md))

## loki_url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## loki_url Examples

```json
"http://10.135.0.3:3100/loki/api/v1/push"
```
