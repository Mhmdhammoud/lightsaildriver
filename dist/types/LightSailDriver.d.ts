import { DeleteDomainResult, CreateDomainResult, GetDomainResult, OpenInstancePublicPortsResult, CloseInstancePublicPortsResult, PutInstancePublicPortsResult, GetInstancesResult, GetInstanceResult, StopInstanceResult, StartInstanceResult, RebootInstanceResult, GetDomainsResult } from '@aws-sdk/client-lightsail';
export declare namespace LightSailDriver {
    interface Instance {
        accessId: string;
        secretKey: string;
        region: string;
    }
    type DomainEntryType = 'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'SOA' | 'TXT' | 'SRV' | 'CAA';
    interface DomainEntry {
        id?: string;
        name?: string;
        type?: DomainEntryType;
        target: string;
    }
    interface CreateDomainEntry {
        domainName: string;
        domainEntry: DomainEntry;
    }
    interface DeleteDomainEntry {
        domainName: string;
        domainEntry: DomainEntry;
    }
    interface PortOptions {
        instanceName: string;
    }
    interface PortInfo extends PortOptions {
        fromPort: number;
        toPort: number;
        protocol: 'tcp' | 'udp' | 'all' | 'icmp';
    }
    interface EditPortInfo {
        fromPort: number;
        toPort: number;
        protocol: 'tcp' | 'udp' | 'all' | 'icmp';
    }
    interface OpenPortInfo extends PortInfo {
        cidrs?: string[];
    }
    type ClosePortInfo = PortInfo;
    type PutPortInfo = EditPortInfo[];
    interface OpenPortsOptions extends PortOptions {
        portInfo: OpenPortInfo;
    }
    interface ClosePortsOptions extends PortOptions {
        portInfo: ClosePortInfo;
    }
    interface PutPortOptions extends PortOptions {
        portInfos: PutPortInfo;
    }
    function openInstancePorts(args: LightSailDriver.OpenPortsOptions): Promise<OpenInstancePublicPortsResult>;
    function closeInstancePorts(args: LightSailDriver.ClosePortsOptions): Promise<CloseInstancePublicPortsResult>;
    function editInstancePorts(args: LightSailDriver.PutPortOptions): Promise<PutInstancePublicPortsResult>;
    function getAllInstances(): Promise<GetInstancesResult>;
    function getInstance(instanceName: string): Promise<GetInstanceResult>;
    function shutDownInstance(instanceName: string): Promise<StopInstanceResult>;
    function startInstance(instanceName: string): Promise<StartInstanceResult>;
    function rebootInstance(instanceName: string): Promise<RebootInstanceResult>;
    function getAllDomains(): Promise<GetDomainsResult>;
    function getDomain(domain_name: string): Promise<GetDomainResult>;
    function createDomain(domain_name: string, tags: Partial<Record<any, any>>[]): Promise<CreateDomainResult>;
    function deleteDomain(domain_name: string): Promise<DeleteDomainResult>;
}
