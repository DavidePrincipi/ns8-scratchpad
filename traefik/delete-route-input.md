# delete-route input Schema

```txt
http://schema.nethserver.org/traefik/delete-route-input.json
```

Delete a HTTP route

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [delete-route-input.json](traefik/delete-route-input.json "open original schema") |

## delete-route input Type

`object` ([delete-route input](delete-route-input.md))

## delete-route input Examples

```json
{
  "instance": "module1"
}
```

# delete-route input Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                               |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [instance](#instance) | `string` | Required | cannot be null | [delete-route input](delete-route-input-properties-instance-name.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/instance") |

## instance

The instance name, which is unique inside the cluster.

`instance`

*   is required

*   Type: `string` ([Instance name](delete-route-input-properties-instance-name.md))

*   cannot be null

*   defined in: [delete-route input](delete-route-input-properties-instance-name.md "http://schema.nethserver.org/traefik/delete-route-input.json#/properties/instance")

### instance Type

`string` ([Instance name](delete-route-input-properties-instance-name.md))

### instance Examples

```json
"module1"
```
