export declare namespace LightSailDriver {
	export interface Instance {
		accessId: string
		secretKey: string
		region: string
	}
	export type DomainEntryType =
		| 'A'
		| 'AAAA'
		| 'CNAME'
		| 'MX'
		| 'NS'
		| 'SOA'
		| 'TXT'
		| 'SRV'
		| 'CAA'

	export interface DomainEntry {
		id?: string
		name?: string
		type?: DomainEntryType
		target: string
	}
	export interface CreateDomainEntry {
		domainName: string
		domainEntry: DomainEntry
	}
	export interface DeleteDomainEntry {
		domainName: string
		domainEntry: DomainEntry
	}

	export interface PortOptions {
		instanceName: string
	}
	export interface PortInfo extends PortOptions {
		fromPort: number
		toPort: number
		protocol: 'tcp' | 'udp' | 'all' | 'icmp'
	}

	export interface EditPortInfo {
		fromPort: number
		toPort: number
		protocol: 'tcp' | 'udp' | 'all' | 'icmp'
	}
	export interface OpenPortInfo extends PortInfo {
		cidrs?: string[]
	}
	export type ClosePortInfo = PortInfo
	export type PutPortInfo = EditPortInfo[]
	export interface OpenPortsOptions extends PortOptions {
		portInfo: OpenPortInfo
	}
	export interface ClosePortsOptions extends PortOptions {
		portInfo: ClosePortInfo
	}
	export interface PutPortOptions extends PortOptions {
		portInfos: PutPortInfo
	}
	export function openInstancePorts(
		args: LightSailDriver.OpenPortsOptions
	): Promise<AWS.Lightsail.OpenInstancePublicPortsResult>

	export function closeInstancePorts(
		args: LightSailDriver.ClosePortsOptions
	): Promise<AWS.Lightsail.CloseInstancePublicPortsResult>

	export function editInstancePorts(
		args: LightSailDriver.PutPortOptions
	): Promise<AWS.Lightsail.PutInstancePublicPortsResult>

	export function getAllInstances(): Promise<AWS.Lightsail.GetInstancesResult>

	export function getInstance(
		instanceName: string
	): Promise<AWS.Lightsail.GetInstanceResult>

	export function shutDownInstance(
		instanceName: string
	): Promise<AWS.Lightsail.StopInstanceResult>

	export function startInstance(
		instanceName: string
	): Promise<AWS.Lightsail.StartInstanceResult>

	export function rebootInstance(
		instanceName: string
	): Promise<AWS.Lightsail.RebootInstanceResult>

	export function getAllDomains(): Promise<AWS.Lightsail.GetDomainsResult>

	export function getDomain(
		domain_name: string
	): Promise<AWS.Lightsail.GetDomainResult>

	export function createDomain(
		domain_name: string,
		tags: Partial<Record<any, any>>[]
	): Promise<AWS.Lightsail.CreateDomainResult>

	export function deleteDomain(
		domain_name: string
	): Promise<AWS.Lightsail.DeleteDomainResult>
}
