# Endpoint TCP port Schema

```txt
http://schema.nethserver.org/ldapproxy/set-backend-input.json#/properties/port
```

TCP port number of the LDAP backend

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [set-backend-input.json*](ldapproxy/set-backend-input.json "open original schema") |

## port Type

`integer` ([Endpoint TCP port](set-backend-input-properties-endpoint-tcp-port.md))

## port Constraints

**minimum**: the value of this number must greater than or equal to: `1`
