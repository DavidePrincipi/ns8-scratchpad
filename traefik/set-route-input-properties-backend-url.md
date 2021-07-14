# Backend URL Schema

```txt
http://schema.nethserver.org/traefik/set-route-input.json#/properties/url
```

The backend target URL.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [set-route-input.json*](traefik/set-route-input.json "open original schema") |

## url Type

`string` ([Backend URL](set-route-input-properties-backend-url.md))

## url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
