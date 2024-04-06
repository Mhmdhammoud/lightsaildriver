import { GetInstanceCommandOutput, GetInstancesCommandOutput, Lightsail, OpenInstancePublicPortsCommandOutput, CloseInstancePublicPortsCommandOutput, PutInstancePublicPortsCommandOutput, StopInstanceCommandOutput, StartInstanceCommandOutput, RebootInstanceCommandOutput, GetDomainsCommandOutput, GetDomainCommandOutput, CreateDomainCommandOutput, DeleteDomainCommandOutput, CreateDomainEntryCommandOutput, DeleteDomainEntryCommandOutput } from '@aws-sdk/client-lightsail';
import { LightSailDriver } from '../types';
declare class Driver {
    private accessId;
    private secretKey;
    private region;
    private client;
    constructor(options: LightSailDriver.Instance);
    getClient(): Lightsail;
    getAllInstances(): Promise<GetInstancesCommandOutput>;
    getInstance(instanceName: string): Promise<GetInstanceCommandOutput>;
    openInstancePorts(args: LightSailDriver.OpenPortsOptions): Promise<OpenInstancePublicPortsCommandOutput>;
    closeInstancePorts(args: LightSailDriver.ClosePortInfo): Promise<CloseInstancePublicPortsCommandOutput>;
    editInstancePorts(args: LightSailDriver.PutPortOptions): Promise<PutInstancePublicPortsCommandOutput>;
    shutDownInstance(instance_name: string): Promise<StopInstanceCommandOutput | null>;
    startInstance(instance_name: string): Promise<StartInstanceCommandOutput | null>;
    rebootInstance(instance_name: string): Promise<RebootInstanceCommandOutput | null>;
    getAllDomains(): Promise<GetDomainsCommandOutput>;
    getDomain(domain_name: string): Promise<GetDomainCommandOutput>;
    createDomain(domain_name: string, tags?: Partial<Record<any, any>>[]): Promise<CreateDomainCommandOutput>;
    deleteDomain(domain_name: string): Promise<DeleteDomainCommandOutput>;
    createDomainEntry(args: LightSailDriver.CreateDomainEntry): Promise<CreateDomainEntryCommandOutput>;
    deleteDomainEntry(args: LightSailDriver.DeleteDomainEntry): Promise<DeleteDomainEntryCommandOutput>;
    editDomainEntry(): Promise<void>;
}
export default Driver;
