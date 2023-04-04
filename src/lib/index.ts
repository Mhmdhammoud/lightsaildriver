import AWS from 'aws-sdk'
import {IInstance, LightSailDriver} from '../types'

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
	private instanceName: string
	constructor(options: LightSailDriver.Instance) {
		this.accessId = options.accessId
		this.secretKey = options.secretKey
		this.region = options.region
		this.instanceName = options.instanceName
		this.client = new AWS.Lightsail({
			accessKeyId: options.accessId,
			secretAccessKey: options.secretKey,
			region: options.region,
		})
	}
	public getClient(): AWS.Lightsail {
		return this.client
	}
	async getAllInstances(): Promise<any> {
		return await this.client.getInstances().promise()
	}
	public async openInstancePorts(
		args: LightSailDriver.OpenPortsOptions
	): Promise<AWS.Lightsail.OpenInstancePublicPortsResult> {
		return this.client
			.openInstancePublicPorts({
				instanceName: this.instanceName,
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
				instanceName: this.instanceName,
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
				instanceName: this.instanceName,
				portInfos: args.portInfos,
			})
			.promise()
	}
}
export default Driver
