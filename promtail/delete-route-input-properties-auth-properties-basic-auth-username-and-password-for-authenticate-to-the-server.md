# Basic auth username and password for authenticate to the server Schema

```txt
http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [delete-route-input.json*](traefik/delete-route-input.json "open original schema") |

## basic Type

`object` ([Basic auth username and password for authenticate to the server](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server.md))

# basic Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                      |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [username](#username) | `string` | Required | cannot be null | [delete-route input](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server-properties-username.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic/properties/username") |
| [password](#password) | `string` | Required | cannot be null | [delete-route input](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server-properties-password.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic/properties/password") |

## username



`username`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server-properties-username.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic/properties/username")

### username Type

`string`

## password



`password`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-auth-properties-basic-auth-username-and-password-for-authenticate-to-the-server-properties-password.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/auth/properties/basic/properties/password")

### password Type

`string`
