import AWS from 'aws-sdk'
import {LightSailDriver} from '../types'

class Driver {
	//AWS access ID
	private accessId: string
	//AWs secret key
	private secretKey: string
	//AWS region
	private region: string
	//AWS Lightsail client
	private client: AWS.Lightsail
	//AWS Lightsail instance name
	constructor(options: LightSailDriver.Instance) {
		this.accessId = options.accessId
		this.secretKey = options.secretKey
		this.region = options.region
		this.client = new AWS.Lightsail({
			accessKeyId: options.accessId,
			secretAccessKey: options.secretKey,
			region: options.region,
		})
	}
	public getClient(): AWS.Lightsail {
		return this.client
	}
	async getAllInstances(): Promise<AWS.Lightsail.GetInstancesResult> {
		return await this.client.getInstances().promise()
	}
	async getInstance(
		instanceName: string
	): Promise<AWS.Lightsail.GetInstanceResult> {
		return await this.client
			.getInstance({
				instanceName,
			})
			.promise()
	}
	public async openInstancePorts(
		args: LightSailDriver.OpenPortsOptions
	): Promise<AWS.Lightsail.OpenInstancePublicPortsResult> {
		return this.client
			.openInstancePublicPorts({
				instanceName: args.instanceName,
				portInfo: {
					fromPort: args.portInfo.fromPort,
					toPort: args.portInfo.toPort,
					protocol: args.portInfo.protocol,
					cidrs: args.portInfo.cidrs || [],
				},
			})
			.promise()
	}

	public async closeInstancePorts(
		args: LightSailDriver.ClosePortInfo
	): Promise<AWS.Lightsail.CloseInstancePublicPortsResult> {
		return this.client
			.closeInstancePublicPorts({
				instanceName: args.instanceName,
				portInfo: {
					fromPort: args.fromPort,
					toPort: args.toPort,
					protocol: args.protocol,
				},
			})
			.promise()
	}
	public async editInstancePorts(
		args: LightSailDriver.PutPortOptions
	): Promise<AWS.Lightsail.PutInstancePublicPortsResult> {
		return await this.client
			.putInstancePublicPorts({
				instanceName: args.instanceName,
				portInfos: args.portInfos,
			})
			.promise()
	}
	public async shutDownInstance(
		instance_name: string
	): Promise<AWS.Lightsail.StopInstanceResult | null> {
		const response = await this.getInstance(instance_name)
		if (!response?.instance) {
			return null
		}
		return await this.client
			.stopInstance({
				instanceName: instance_name,
			})
			.promise()
	}
	public async startInstance(
		instance_name: string
	): Promise<AWS.Lightsail.StartInstanceResult | null> {
		const response = await this.getInstance(instance_name)
		if (!response?.instance) {
			return null
		}
		return await this.client
			.startInstance({
				instanceName: instance_name,
			})
			.promise()
	}
	public async rebootInstance(
		instance_name: string
	): Promise<AWS.Lightsail.RebootInstanceResult | null> {
		const response = await this.getInstance(instance_name)
		if (!response?.instance) {
			return null
		}
		return await this.client
			.rebootInstance({
				instanceName: instance_name,
			})
			.promise()
	}
	public async getAllDomains(): Promise<AWS.Lightsail.GetDomainsResult> {
		return await this.client.getDomains().promise()
	}

	public async getDomain(
		domain_name: string
	): Promise<AWS.Lightsail.GetDomainResult> {
		return await this.client
			.getDomain({
				domainName: domain_name,
			})
			.promise()
	}
	public async createDomain(
		domain_name: string,
		tags: Partial<Record<any, any>>[] = []
	): Promise<AWS.Lightsail.CreateDomainResult> {
		return await this.client
			.createDomain({
				domainName: domain_name,
				tags,
			})
			.promise()
	}

	public async deleteDomain(
		domain_name: string
	): Promise<AWS.Lightsail.DeleteDomainResult> {
		return await this.client
			.deleteDomain({
				domainName: domain_name,
			})
			.promise()
	}

	public async createDomainEntry(
		args: LightSailDriver.CreateDomainEntry
	): Promise<AWS.Lightsail.CreateDomainEntryResult> {
		return await this.client
			.createDomainEntry({
				domainName: args.domainName,
				domainEntry: {
					name: args.domainEntry.name,
					type: args.domainEntry.type,
				},
			})
			.promise()
	}

	public async deleteDomainEntry(
		args: LightSailDriver.DeleteDomainEntry
	): Promise<AWS.Lightsail.DeleteDomainEntryResult> {
		return await this.client
			.deleteDomainEntry({
				domainName: args.domainName,
				domainEntry: {
					name: args.domainEntry.name,
					type: args.domainEntry.type,
				},
			})
			.promise()
	}
	public async editDomainEntry(): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
export default Driver
