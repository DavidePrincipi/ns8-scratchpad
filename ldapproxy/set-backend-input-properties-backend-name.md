# Backend name Schema

```txt
http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/backend
```

The backend module ID for local account providers, i.e. `host=127.0.0.1`. For remote account providers, just a meaningful word

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [set-backend-input.json*](ldapproxy/set-backend-input.json "open original schema") |

## backend Type

`string` ([Backend name](set-backend-input-properties-backend-name.md))

## backend Examples

```json
"samba1"
```

```json
"Azure"
```
