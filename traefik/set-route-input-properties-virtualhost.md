# Virtualhost Schema

```txt
http://schema.nethserver.org/traefik/set-route-input.json#/properties/host
```

A fully qualified domain name as virtualhost.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [set-route-input.json*](traefik/set-route-input.json "open original schema") |

## host Type

`string` ([Virtualhost](set-route-input-properties-virtualhost.md))

## host Constraints

**hostname**: the string must be a hostname, according to [RFC 1123, section 2.1](https://tools.ietf.org/html/rfc1123 "check the specification")
