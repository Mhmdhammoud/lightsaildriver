import AWS from 'aws-sdk';
import { LightSailDriver } from '../types';
declare class Driver {
    private accessId;
    private secretKey;
    private region;
    private client;
    constructor(options: LightSailDriver.Instance);
    getClient(): AWS.Lightsail;
    getAllInstances(): Promise<AWS.Lightsail.GetInstancesResult>;
    getInstance(instanceName: string): Promise<AWS.Lightsail.GetInstanceResult>;
    openInstancePorts(args: LightSailDriver.OpenPortsOptions): Promise<AWS.Lightsail.OpenInstancePublicPortsResult>;
    closeInstancePorts(args: LightSailDriver.ClosePortInfo): Promise<AWS.Lightsail.CloseInstancePublicPortsResult>;
    editInstancePorts(args: LightSailDriver.PutPortOptions): Promise<AWS.Lightsail.PutInstancePublicPortsResult>;
    shutDownInstance(instance_name: string): Promise<AWS.Lightsail.StopInstanceResult | null>;
    startInstance(instance_name: string): Promise<AWS.Lightsail.StartInstanceResult | null>;
    rebootInstance(instance_name: string): Promise<AWS.Lightsail.RebootInstanceResult | null>;
    getAllDomains(): Promise<AWS.Lightsail.GetDomainsResult>;
    getDomain(domain_name: string): Promise<AWS.Lightsail.GetDomainResult>;
    createDomain(domain_name: string, tags?: Partial<Record<any, any>>[]): Promise<AWS.Lightsail.CreateDomainResult>;
    deleteDomain(domain_name: string): Promise<AWS.Lightsail.DeleteDomainResult>;
    createDomainEntry(args: LightSailDriver.CreateDomainEntry): Promise<AWS.Lightsail.CreateDomainEntryResult>;
    deleteDomainEntry(args: LightSailDriver.DeleteDomainEntry): Promise<AWS.Lightsail.DeleteDomainEntryResult>;
    editDomainEntry(): Promise<void>;
}
export default Driver;
