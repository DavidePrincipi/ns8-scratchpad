# add-dc input Schema

```txt
http://schema.nethserver.org/samba/add-dc-input.json
```

Add a new DC to the lists of known DCs

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-dc-input.json](samba/add-dc-input.json "open original schema") |

## add-dc input Type

`object` ([add-dc input](add-dc-input.md))

## add-dc input Examples

```json
{
  "hostname": "dc3",
  "ipaddress": "192.168.4.3"
}
```

# add-dc input Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [ipaddress](#ipaddress) | `string` | Required | cannot be null | [add-dc input](add-dc-input-properties-ipaddress.md "http://schema.nethserver.org/samba/add-dc-input.json#/properties/ipaddress") |
| [hostname](#hostname)   | `string` | Required | cannot be null | [add-dc input](add-dc-input-properties-hostname.md "http://schema.nethserver.org/samba/add-dc-input.json#/properties/hostname")   |

## ipaddress



`ipaddress`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [add-dc input](add-dc-input-properties-ipaddress.md "http://schema.nethserver.org/samba/add-dc-input.json#/properties/ipaddress")

### ipaddress Type

`string`

### ipaddress Constraints

**IPv4**: the string must be an IPv4 address (dotted quad), according to [RFC 2673, section 3.2](https://tools.ietf.org/html/rfc2673 "check the specification")

## hostname



`hostname`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [add-dc input](add-dc-input-properties-hostname.md "http://schema.nethserver.org/samba/add-dc-input.json#/properties/hostname")

### hostname Type

`string`

### hostname Constraints

**maximum length**: the maximum number of characters for this string is: `15`

**pattern**: the string must match the following regular expression: 

```regexp
^[a-zA-Z][-a-zA-Z0-9]*$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z%5D%5B-a-zA-Z0-9%5D\*%24 "try regular expression with regexr.com")
