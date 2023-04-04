export declare namespace LightSailDriver {
	export interface Instance {
		accessId: string
		secretKey: string
		region: string
		instanceName: string
	}
	export interface PortOptions {
		instanceName: String
	}
	export interface PortInfo {
		fromPort: number
		toPort: number
		protocol: 'tcp' | 'udp' | 'all' | 'icmp'
	}
	export interface OpenPortInfo extends PortInfo {
		cidrs?: string[]
	}
	export type ClosePortInfo = PortInfo
	export type PutPortInfo = PortInfo[]
	export interface OpenPortsOptions extends PortOptions {
		portInfo: OpenPortInfo
	}
	export interface ClosePortsOptions extends PortOptions {
		portInfo: ClosePortInfo
	}
	export interface PutPortOptions extends PortOptions {
		portInfos: PutPortInfo
	}
}
