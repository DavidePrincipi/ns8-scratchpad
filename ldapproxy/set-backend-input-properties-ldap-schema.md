# LDAP schema Schema

```txt
http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/schema
```

Describe the LDAP tree structure of the backend.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [set-backend-input.json*](ldapproxy/set-backend-input.json "open original schema") |

## schema Type

`string` ([LDAP schema](set-backend-input-properties-ldap-schema.md))

## schema Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"ad"`      |             |
| `"rfc2307"` |             |
