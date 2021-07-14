# add-module input Schema

```txt
http://schema.nethserver.org/cluster/add-module-input.json
```

Input schema of the add-module action

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-module-input.json](cluster/add-module-input.json "open original schema") |

## add-module input Type

`object` ([add-module input](add-module-input-1.md))

## add-module input Examples

```json
{
  "image": "traefik",
  "node": 1
}
```

# add-module input Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                |
| :-------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [image](#image) | `string`  | Required | cannot be null | [add-module input](add-module-input-1-properties-image.md "http://schema.nethserver.org/cluster/add-module-input.json#/properties/image") |
| [node](#node)   | `integer` | Required | cannot be null | [add-module input](add-module-input-1-properties-node.md "http://schema.nethserver.org/cluster/add-module-input.json#/properties/node")   |

## image

Name of the module image to install

`image`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [add-module input](add-module-input-1-properties-image.md "http://schema.nethserver.org/cluster/add-module-input.json#/properties/image")

### image Type

`string`

## node

Node identifier where the module has to be installed

`node`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [add-module input](add-module-input-1-properties-node.md "http://schema.nethserver.org/cluster/add-module-input.json#/properties/node")

### node Type

`integer`

### node Constraints

**minimum**: the value of this number must greater than or equal to: `1`
