import {
	GetInstanceCommandOutput,
	GetInstancesCommandOutput,
	Lightsail,
	GetInstanceCommand,
	GetInstancesCommand,
	OpenInstancePublicPortsCommand,
	OpenInstancePublicPortsCommandOutput,
	CloseInstancePublicPortsCommand,
	CloseInstancePublicPortsCommandOutput,
	PutInstancePublicPortsCommandOutput,
	PutInstancePublicPortsCommand,
	StopInstanceCommandOutput,
	StopInstanceCommand,
	StartInstanceCommandOutput,
	StartInstanceCommand,
	RebootInstanceCommandOutput,
	RebootInstanceCommand,
	GetDomainsCommand,
	GetDomainsCommandOutput,
	GetDomainCommandOutput,
	GetDomainCommand,
	CreateDomainCommand,
	CreateDomainCommandOutput,
	DeleteDomainCommandOutput,
	DeleteDomainCommand,
	CreateDomainEntryCommandOutput,
	CreateDomainEntryCommand,
	DeleteDomainEntryCommandOutput,
	DeleteDomainEntryCommand,
} from '@aws-sdk/client-lightsail'
import {LightSailDriver} from '../types'

class Driver {
	//AWS access ID
	private accessId: string
	//AWs secret key
	private secretKey: string
	//AWS region
	private region: string
	//AWS Lightsail client
	private client: Lightsail
	//AWS Lightsail instance name
	constructor(options: LightSailDriver.Instance) {
		this.accessId = options.accessId
		this.secretKey = options.secretKey
		this.region = options.region
		this.client = new Lightsail({
			credentials: {
				accessKeyId: options.accessId,
				secretAccessKey: options.secretKey,
			},
			region: options.region,
		})
	}
	public getClient(): Lightsail {
		return this.client
	}
	async getAllInstances(): Promise<GetInstancesCommandOutput> {
		return await this.client.send(new GetInstancesCommand({}))
	}
	async getInstance(instanceName: string): Promise<GetInstanceCommandOutput> {
		return await this.client.send(new GetInstanceCommand({instanceName}))
	}
	public async openInstancePorts(
		args: LightSailDriver.OpenPortsOptions
	): Promise<OpenInstancePublicPortsCommandOutput> {
		return this.client.send(
			new OpenInstancePublicPortsCommand({
				instanceName: args.instanceName,
				portInfo: {
					fromPort: args.portInfo.fromPort,
					toPort: args.portInfo.toPort,
					protocol: args.portInfo.protocol,
					cidrs: args.portInfo.cidrs || [],
				},
			})
		)
	}

	public async closeInstancePorts(
		args: LightSailDriver.ClosePortInfo
	): Promise<CloseInstancePublicPortsCommandOutput> {
		return this.client.send(
			new CloseInstancePublicPortsCommand({
				instanceName: args.instanceName,
				portInfo: {
					fromPort: args.fromPort,
					toPort: args.toPort,
					protocol: args.protocol,
				},
			})
		)
	}
	public async editInstancePorts(
		args: LightSailDriver.PutPortOptions
	): Promise<PutInstancePublicPortsCommandOutput> {
		return await this.client.send(
			new PutInstancePublicPortsCommand({
				instanceName: args.instanceName,
				portInfos: args.portInfos,
			})
		)
	}
	public async shutDownInstance(
		instance_name: string
	): Promise<StopInstanceCommandOutput | null> {
		const response = await this.getInstance(instance_name)
		if (!response?.instance) {
			return null
		}
		return await this.client.send(
			new StopInstanceCommand({
				instanceName: instance_name,
			})
		)
	}
	public async startInstance(
		instance_name: string
	): Promise<StartInstanceCommandOutput | null> {
		const response = await this.getInstance(instance_name)
		if (!response?.instance) {
			return null
		}
		return await this.client.send(
			new StartInstanceCommand({
				instanceName: instance_name,
			})
		)
	}
	public async rebootInstance(
		instance_name: string
	): Promise<RebootInstanceCommandOutput | null> {
		const response = await this.getInstance(instance_name)
		if (!response?.instance) {
			return null
		}
		return await this.client.send(
			new RebootInstanceCommand({
				instanceName: instance_name,
			})
		)
	}
	public async getAllDomains(): Promise<GetDomainsCommandOutput> {
		return await this.client.send(new GetDomainsCommand({}))
	}

	public async getDomain(domain_name: string): Promise<GetDomainCommandOutput> {
		return await this.client.send(
			new GetDomainCommand({
				domainName: domain_name,
			})
		)
	}
	public async createDomain(
		domain_name: string,
		tags: Partial<Record<any, any>>[] = []
	): Promise<CreateDomainCommandOutput> {
		return await this.client.send(
			new CreateDomainCommand({
				domainName: domain_name,
				tags,
			})
		)
	}

	public async deleteDomain(
		domain_name: string
	): Promise<DeleteDomainCommandOutput> {
		return await this.client.send(
			new DeleteDomainCommand({
				domainName: domain_name,
			})
		)
	}

	public async createDomainEntry(
		args: LightSailDriver.CreateDomainEntry
	): Promise<CreateDomainEntryCommandOutput> {
		return await this.client.send(
			new CreateDomainEntryCommand({
				domainName: args.domainName,
				domainEntry: {
					name: args.domainEntry.name,
					type: args.domainEntry.type,
					target: args.domainEntry.target,
				},
			})
		)
	}

	public async deleteDomainEntry(
		args: LightSailDriver.DeleteDomainEntry
	): Promise<DeleteDomainEntryCommandOutput> {
		return await this.client.send(
			new DeleteDomainEntryCommand({
				domainName: args.domainName,
				domainEntry: {
					name: args.domainEntry.name,
					type: args.domainEntry.type,
				},
			})
		)
	}
	public async editDomainEntry(): Promise<void> {
		throw new Error('Method not implemented.')
	}
}
export default Driver
