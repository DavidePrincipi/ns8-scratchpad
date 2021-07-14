# add-module input Schema

```txt
http://schema.nethserver.org/node/add-module-input.json
```

Install a module on the worker node

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [add-module-input.json](node/add-module-input.json "open original schema") |

## add-module input Type

`object` ([add-module input](add-module-input.md))

## add-module input Examples

```json
{
  "image_url": "ghcr.io/nethserver/ldapproxy:latest",
  "module_id": "ldapproxy2",
  "is_rootfull": false
}
```

# add-module input Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                                         |
| :-------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [image_url](#image_url)     | `string`  | Required | cannot be null | [add-module input](add-module-input-properties-image-url.md "http://schema.nethserver.org/node/add-module-input.json#/properties/image_url")                       |
| [is_rootfull](#is_rootfull) | `boolean` | Required | cannot be null | [add-module input](add-module-input-properties-required-type-of-installation.md "http://schema.nethserver.org/node/add-module-input.json#/properties/is_rootfull") |
| [module_id](#module_id)     | `string`  | Required | cannot be null | [add-module input](add-module-input-properties-module-identifier.md "http://schema.nethserver.org/node/add-module-input.json#/properties/module_id")               |

## image_url

URL of the module root image

`image_url`

*   is required

*   Type: `string` ([Image URL](add-module-input-properties-image-url.md))

*   cannot be null

*   defined in: [add-module input](add-module-input-properties-image-url.md "http://schema.nethserver.org/node/add-module-input.json#/properties/image_url")

### image_url Type

`string` ([Image URL](add-module-input-properties-image-url.md))

### image_url Constraints

**minimum length**: the minimum number of characters for this string is: `1`

### image_url Examples

```json
"ghcr.io/nethserver/mymodule:v2.3.2"
```

## is_rootfull

If `true` the module is installed in rootfull mode.
Its agent runs as root and its containers can be granted **privileged access**.

`is_rootfull`

*   is required

*   Type: `boolean` ([Required type of installation](add-module-input-properties-required-type-of-installation.md))

*   cannot be null

*   defined in: [add-module input](add-module-input-properties-required-type-of-installation.md "http://schema.nethserver.org/node/add-module-input.json#/properties/is_rootfull")

### is_rootfull Type

`boolean` ([Required type of installation](add-module-input-properties-required-type-of-installation.md))

## module_id



`module_id`

*   is required

*   Type: `string` ([Module identifier](add-module-input-properties-module-identifier.md))

*   cannot be null

*   defined in: [add-module input](add-module-input-properties-module-identifier.md "http://schema.nethserver.org/node/add-module-input.json#/properties/module_id")

### module_id Type

`string` ([Module identifier](add-module-input-properties-module-identifier.md))

### module_id Constraints

**minimum length**: the minimum number of characters for this string is: `1`

### module_id Examples

```json
"dokuwiki1"
```

```json
"traefik3"
```

```json
"samba1"
```
