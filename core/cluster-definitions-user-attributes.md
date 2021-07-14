# User attributes Schema

```txt
http://schema.nethserver.org/cluster/add-user-input.json#/properties/set
```

Attributes of a User

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-user-input.json*](cluster/add-user-input.json "open original schema") |

## set Type

`object` ([User attributes](cluster-definitions-user-attributes.md))

## set Examples

```json
{
  "display_name": "Mighty Admin"
}
```

# set Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :---------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [display_name](#display_name) | `string` | Optional | cannot be null | [Cluster library](cluster-definitions-user-attributes-properties-display_name.md "http://schema.nethserver.org/cluster.json#/definitions/user-attributes/properties/display_name") |

## display_name



`display_name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Cluster library](cluster-definitions-user-attributes-properties-display_name.md "http://schema.nethserver.org/cluster.json#/definitions/user-attributes/properties/display_name")

### display_name Type

`string`

### display_name Constraints

**minimum length**: the minimum number of characters for this string is: `1`
