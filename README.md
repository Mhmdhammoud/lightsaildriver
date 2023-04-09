# Meritt dev Amazon AWS Lightsail driver

This is a minified version of the [Amazon AWS Lightsail driver](https://www.npmjs.com/package/aws-sdk), Yet it used version 2.x of the AWS SDK.

## Installation

For npm:

```
npm install @mhmdhammoud/lightsaildriver
```

or for yarn:

```
yarn add @mhmdhammoud/lightsaildriver
```

## Usage

```typescript
import {LightsailDriver} from '@mhmdhammoud/lightsaildriver'

const client = new LightsailDriver({accessId, secretKey, region})

// Example of getting all Lightsail instances
const instances = await client.getInstances()
```

## API

### `getInstances()`

Returns a list of all Lightsail instances.

### `getInstance(instanceName: string)`

Returns a Lightsail instance by its name.

### `startInstance(instanceName: string)`

Starts a Lightsail instance by its name.

### `shutDownInstance(instanceName: string)`

Stops a Lightsail instance by its name.

### `rebootInstance(instanceName: string)`

Reboots a Lightsail instance by its name.

### `openInstancePorts(args: LightSailDriver.OpenPortsOptions)`

Opens ports for a Lightsail instance by its name.

### `closeInstancePorts(args: LightSailDriver.ClosePortsOptions)`

Closes ports for a Lightsail instance by its name.

### `editInstancePorts(args: LightSailDriver.PutPortOptions)`

Edits ports for a Lightsail instance by its name.

### `getAllDomains()`

Returns a list of all Lightsail domains.

### `getDomain(domainName: string)`

Returns a Lightsail domain by its name.

### `createDomain(domainName: string)`

Creates a Lightsail domain by its name.

### `deleteDomain(domainName: string)`

Deletes a Lightsail domain by its name.

## License

MIT

## Author

Mohammad Hammoud

## Credits

- [Amazon AWS Lightsail driver](https://www.npmjs.com/package/aws-sdk)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Changelog

See [CHANGELOG.md](CHANGELOG.md)
