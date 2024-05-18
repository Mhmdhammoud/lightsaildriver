import {
	DeleteDomainResult,
	CreateDomainResult,
	GetDomainResult,
	OpenInstancePublicPortsResult,
	CloseInstancePublicPortsResult,
	PutInstancePublicPortsResult,
	GetInstancesResult,
	GetInstanceResult,
	StopInstanceResult,
	StartInstanceResult,
	RebootInstanceResult,
	GetDomainsResult,
} from '@aws-sdk/client-lightsail'
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
	export interface PortInfo {
		fromPort: number
		toPort: number
		protocol: 'tcp' | 'udp' | 'all' | 'icmp'
		cidrs: string[]
	}

	export interface EditPortInfo {
		fromPort: number
		toPort: number
		protocol: 'tcp' | 'udp' | 'all' | 'icmp'
		cidrs: string[]
	}
	export type OpenPortInfo = PortInfo
	export type ClosePortInfo = PortInfo
	export type PutPortInfo = EditPortInfo[]
	export interface OpenPortsOptions {
		portInfo: OpenPortInfo
	}
	export interface ClosePortsOptions {
		portInfo: ClosePortInfo
	}
	export interface PutPortOptions {
		portInfos: PutPortInfo
	}
	export function openInstancePorts(
		args: LightSailDriver.OpenPortsOptions
	): Promise<OpenInstancePublicPortsResult>

	export function closeInstancePorts(
		args: LightSailDriver.ClosePortsOptions
	): Promise<CloseInstancePublicPortsResult>

	export function editInstancePorts(
		args: LightSailDriver.PutPortOptions
	): Promise<PutInstancePublicPortsResult>

	export function getAllInstances(): Promise<GetInstancesResult>

	export function getInstance(instanceName: string): Promise<GetInstanceResult>

	export function shutDownInstance(
		instanceName: string
	): Promise<StopInstanceResult>

	export function startInstance(
		instanceName: string
	): Promise<StartInstanceResult>

	export function rebootInstance(
		instanceName: string
	): Promise<RebootInstanceResult>

	export function getAllDomains(): Promise<GetDomainsResult>

	export function getDomain(domain_name: string): Promise<GetDomainResult>

	export function createDomain(
		domain_name: string,
		tags: Partial<Record<any, any>>[]
	): Promise<CreateDomainResult>

	export function deleteDomain(domain_name: string): Promise<DeleteDomainResult>
}
