# add-route input Schema

```txt
http://schema.nethserver.org/cluster/add-route-input.json
```

Route traffic to the given network through a VPN node

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-route-input.json](cluster/add-route-input.json "open original schema") |

## add-route input Type

unknown ([add-route input](add-route-input.md))

## add-route input Examples

```json
{
  "network": "192.168.2.0/16",
  "node_id": 3
}
```

# add-route input Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                   |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [network](#network) | `string`  | Required | cannot be null | [add-route input](cluster-definitions-ipv4-cidr.md "http://schema.nethserver.org/cluster/add-route-input.json#/properties/network")                          |
| [node_id](#node_id) | `integer` | Required | cannot be null | [add-route input](add-route-input-properties-destination-node-identifier.md "http://schema.nethserver.org/cluster/add-route-input.json#/properties/node_id") |

## network

IPv4 with netmask in CIDR notation

`network`

*   is required

*   Type: `string` ([IPv4 CIDR](cluster-definitions-ipv4-cidr.md))

*   cannot be null

*   defined in: [add-route input](cluster-definitions-ipv4-cidr.md "http://schema.nethserver.org/cluster/add-route-input.json#/properties/network")

### network Type

`string` ([IPv4 CIDR](cluster-definitions-ipv4-cidr.md))

### network Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$
```

[try pattern](https://regexr.com/?expression=%5E\(%5B0-9%5D%7B1%2C3%7D%5C.\)%7B3%7D%5B0-9%5D%7B1%2C3%7D\(%5C%2F\(%5B0-9%5D%7C%5B1-2%5D%5B0-9%5D%7C3%5B0-2%5D\)\)%3F%24 "try regular expression with regexr.com")

### network Examples

```json
"10.5.4.0/24"
```

```json
"192.168.73.0/24"
```

## node_id

Node ID used as route next-hop

`node_id`

*   is required

*   Type: `integer` ([Destination node identifier](add-route-input-properties-destination-node-identifier.md))

*   cannot be null

*   defined in: [add-route input](add-route-input-properties-destination-node-identifier.md "http://schema.nethserver.org/cluster/add-route-input.json#/properties/node_id")

### node_id Type

`integer` ([Destination node identifier](add-route-input-properties-destination-node-identifier.md))

### node_id Constraints

**minimum (exclusive)**: the value of this number must be greater than: `0`
