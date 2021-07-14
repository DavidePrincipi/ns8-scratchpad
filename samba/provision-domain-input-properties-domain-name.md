# Domain name Schema

```txt
http://schema.nethserver.org/samba/provision-domain-input.json#/properties/realm
```

This field is ignored for additional Samba instances

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [provision-domain-input.json*](samba/provision-domain-input.json "open original schema") |

## realm Type

`string` ([Domain name](provision-domain-input-properties-domain-name.md))

## realm Constraints

**maximum length**: the maximum number of characters for this string is: `140`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z][-a-zA-Z0-9]{0,62}(\.[a-zA-Z][-a-zA-Z0-9]{0,62})+$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D%7B0%2C62%7D\(%5C.%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D%7B0%2C62%7D\)%2B%24 "try regular expression with regexr.com")
