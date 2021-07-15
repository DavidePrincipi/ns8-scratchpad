# Untitled object in delete-route input Schema

```txt
http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [delete-route-input.json*](traefik/delete-route-input.json "open original schema") |

## auth Type

`object` ([Details](delete-route-input-properties-auth.md))

one (and only one) of

*   [Untitled undefined type in delete-route input](delete-route-input-properties-auth-oneof-0.md "check type definition")

*   [Untitled undefined type in delete-route input](delete-route-input-properties-auth-oneof-1.md "check type definition")

# auth Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [token](#token) | `string` | Optional | cannot be null | [delete-route input](delete-route-input-properties-auth-properties-bearer-token-to-send-to-the-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/token")                              |
| [basic](#basic) | `object` | Optional | cannot be null | [delete-route input](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic") |

## token



`token`

*   is optional

*   Type: `string` ([Bearer token to send to the server](delete-route-input-properties-auth-properties-bearer-token-to-send-to-the-server.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-auth-properties-bearer-token-to-send-to-the-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/token")

### token Type

`string` ([Bearer token to send to the server](delete-route-input-properties-auth-properties-bearer-token-to-send-to-the-server.md))

## basic



`basic`

*   is optional

*   Type: `object` ([Basic auth username and password for authenticate to the server](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic")

### basic Type

`object` ([Basic auth username and password for authenticate to the server](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server.md))
