# Image URL Schema

```txt
http://schema.nethserver.org/node/add-module-input.json#/properties/image_url
```

URL of the module root image

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [add-module-input.json*](node/add-module-input.json "open original schema") |

## image_url Type

`string` ([Image URL](add-module-input-properties-image-url.md))

## image_url Constraints

**minimum length**: the minimum number of characters for this string is: `1`

## image_url Examples

```json
"ghcr.io/nethserver/mymodule:v2.3.2"
```
