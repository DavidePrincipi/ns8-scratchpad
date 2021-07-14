# NetBIOS domain name Schema

```txt
http://schema.nethserver.org/samba/provision-domain-input.json#/properties/nbdomain
```

This field is ignored for additional Samba instances

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [provision-domain-input.json*](samba/provision-domain-input.json "open original schema") |

## nbdomain Type

`string` ([NetBIOS domain name](provision-domain-input-properties-netbios-domain-name.md))

## nbdomain Constraints

**maximum length**: the maximum number of characters for this string is: `15`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z][-a-zA-Z0-9]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D\*%24 "try regular expression with regexr.com")
