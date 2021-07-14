# WireGuard listening UDP port Schema

```txt
http://schema.nethserver.org/cluster/join-cluster-input.json#/properties/listen_port
```

Listening UDP port for incoming WireGuard VPN packets

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [join-cluster-input.json*](cluster/join-cluster-input.json "open original schema") |

## listen_port Type

`integer` ([WireGuard listening UDP port](join-cluster-input-properties-wireguard-listening-udp-port.md))

## listen_port Constraints

**minimum (exclusive)**: the value of this number must be greater than: `1024`
