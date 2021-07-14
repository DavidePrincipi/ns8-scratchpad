# provision-domain input Schema

```txt
http://schema.nethserver.org/samba/provision-domain-input.json
```

Provision a new Active Directory domain controller

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [provision-domain-input.json](samba/provision-domain-input.json "open original schema") |

## provision-domain input Type

`object` ([provision-domain input](provision-domain-input.md))

## provision-domain input Examples

```json
{
  "adminuser": "administrator",
  "adminpass": "Nethesis,1234",
  "realm": "AD.EXAMPLE.COM",
  "ipaddress": "10.15.21.100",
  "hostname": "dc1",
  "nbdomain": "AD"
}
```

# provision-domain input Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                               |
| :---------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [adminuser](#adminuser) | `string` | Required | cannot be null | [provision-domain input](provision-domain-input-properties-adminuser.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/adminuser")          |
| [adminpass](#adminpass) | `string` | Required | cannot be null | [provision-domain input](provision-domain-input-properties-adminpass.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/adminpass")          |
| [ipaddress](#ipaddress) | `string` | Required | cannot be null | [provision-domain input](provision-domain-input-properties-ipaddress.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/ipaddress")          |
| [hostname](#hostname)   | `string` | Optional | cannot be null | [provision-domain input](provision-domain-input-properties-hostname.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/hostname")            |
| [realm](#realm)         | `string` | Optional | cannot be null | [provision-domain input](provision-domain-input-properties-domain-name.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/realm")            |
| [nbdomain](#nbdomain)   | `string` | Optional | cannot be null | [provision-domain input](provision-domain-input-properties-netbios-domain-name.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/nbdomain") |

## adminuser



`adminuser`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [provision-domain input](provision-domain-input-properties-adminuser.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/adminuser")

### adminuser Type

`string`

## adminpass



`adminpass`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [provision-domain input](provision-domain-input-properties-adminpass.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/adminpass")

### adminpass Type

`string`

## ipaddress



`ipaddress`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [provision-domain input](provision-domain-input-properties-ipaddress.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/ipaddress")

### ipaddress Type

`string`

### ipaddress Constraints

**IPv4**: the string must be an IPv4 address (dotted quad), according to [RFC 2673, section 3.2](https://tools.ietf.org/html/rfc2673 "check the specification")

## hostname



`hostname`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [provision-domain input](provision-domain-input-properties-hostname.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/hostname")

### hostname Type

`string`

### hostname Constraints

**maximum length**: the maximum number of characters for this string is: `15`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z][-a-zA-Z0-9]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D\*%24 "try regular expression with regexr.com")

## realm

This field is ignored for additional Samba instances

`realm`

*   is optional

*   Type: `string` ([Domain name](provision-domain-input-properties-domain-name.md))

*   cannot be null

*   defined in: [provision-domain input](provision-domain-input-properties-domain-name.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/realm")

### realm Type

`string` ([Domain name](provision-domain-input-properties-domain-name.md))

### realm Constraints

**maximum length**: the maximum number of characters for this string is: `140`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z][-a-zA-Z0-9]{0,62}(\.[a-zA-Z][-a-zA-Z0-9]{0,62})+$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D%7B0%2C62%7D\(%5C.%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D%7B0%2C62%7D\)%2B%24 "try regular expression with regexr.com")

## nbdomain

This field is ignored for additional Samba instances

`nbdomain`

*   is optional

*   Type: `string` ([NetBIOS domain name](provision-domain-input-properties-netbios-domain-name.md))

*   cannot be null

*   defined in: [provision-domain input](provision-domain-input-properties-netbios-domain-name.md "http://schema.nethserver.org/samba/provision-domain-input.json#/properties/nbdomain")

### nbdomain Type

`string` ([NetBIOS domain name](provision-domain-input-properties-netbios-domain-name.md))

### nbdomain Constraints

**maximum length**: the maximum number of characters for this string is: `15`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z][-a-zA-Z0-9]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D\*%24 "try regular expression with regexr.com")
