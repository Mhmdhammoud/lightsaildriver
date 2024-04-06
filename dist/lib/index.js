"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_lightsail_1 = require("@aws-sdk/client-lightsail");
class Driver {
    //AWS Lightsail instance name
    constructor(options) {
        this.accessId = options.accessId;
        this.secretKey = options.secretKey;
        this.region = options.region;
        this.client = new client_lightsail_1.Lightsail({
            credentials: {
                accessKeyId: options.accessId,
                secretAccessKey: options.secretKey,
            },
            region: options.region,
        });
    }
    getClient() {
        return this.client;
    }
    async getAllInstances() {
        return await this.client.send(new client_lightsail_1.GetInstancesCommand({}));
    }
    async getInstance(instanceName) {
        return await this.client.send(new client_lightsail_1.GetInstanceCommand({ instanceName }));
    }
    async openInstancePorts(args) {
        return this.client.send(new client_lightsail_1.OpenInstancePublicPortsCommand({
            instanceName: args.instanceName,
            portInfo: {
                fromPort: args.portInfo.fromPort,
                toPort: args.portInfo.toPort,
                protocol: args.portInfo.protocol,
                cidrs: args.portInfo.cidrs || [],
            },
        }));
    }
    async closeInstancePorts(args) {
        return this.client.send(new client_lightsail_1.CloseInstancePublicPortsCommand({
            instanceName: args.instanceName,
            portInfo: {
                fromPort: args.fromPort,
                toPort: args.toPort,
                protocol: args.protocol,
            },
        }));
    }
    async editInstancePorts(args) {
        return await this.client.send(new client_lightsail_1.PutInstancePublicPortsCommand({
            instanceName: args.instanceName,
            portInfos: args.portInfos,
        }));
    }
    async shutDownInstance(instance_name) {
        const response = await this.getInstance(instance_name);
        if (!(response === null || response === void 0 ? void 0 : response.instance)) {
            return null;
        }
        return await this.client.send(new client_lightsail_1.StopInstanceCommand({
            instanceName: instance_name,
        }));
    }
    async startInstance(instance_name) {
        const response = await this.getInstance(instance_name);
        if (!(response === null || response === void 0 ? void 0 : response.instance)) {
            return null;
        }
        return await this.client.send(new client_lightsail_1.StartInstanceCommand({
            instanceName: instance_name,
        }));
    }
    async rebootInstance(instance_name) {
        const response = await this.getInstance(instance_name);
        if (!(response === null || response === void 0 ? void 0 : response.instance)) {
            return null;
        }
        return await this.client.send(new client_lightsail_1.RebootInstanceCommand({
            instanceName: instance_name,
        }));
    }
    async getAllDomains() {
        return await this.client.send(new client_lightsail_1.GetDomainsCommand({}));
    }
    async getDomain(domain_name) {
        return await this.client.send(new client_lightsail_1.GetDomainCommand({
            domainName: domain_name,
        }));
    }
    async createDomain(domain_name, tags = []) {
        return await this.client.send(new client_lightsail_1.CreateDomainCommand({
            domainName: domain_name,
            tags,
        }));
    }
    async deleteDomain(domain_name) {
        return await this.client.send(new client_lightsail_1.DeleteDomainCommand({
            domainName: domain_name,
        }));
    }
    async createDomainEntry(args) {
        return await this.client.send(new client_lightsail_1.CreateDomainEntryCommand({
            domainName: args.domainName,
            domainEntry: {
                name: args.domainEntry.name,
                type: args.domainEntry.type,
                target: args.domainEntry.target,
            },
        }));
    }
    async deleteDomainEntry(args) {
        return await this.client.send(new client_lightsail_1.DeleteDomainEntryCommand({
            domainName: args.domainName,
            domainEntry: {
                name: args.domainEntry.name,
                type: args.domainEntry.type,
            },
        }));
    }
    async editDomainEntry() {
        throw new Error('Method not implemented.');
    }
}
exports.default = Driver;
