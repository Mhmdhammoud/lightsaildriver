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
    function openInstancePorts(args: LightSailDriver.OpenPortsOptions): Promise<AWS.Lightsail.OpenInstancePublicPortsResult>;
    function closeInstancePorts(args: LightSailDriver.ClosePortsOptions): Promise<AWS.Lightsail.CloseInstancePublicPortsResult>;
    function editInstancePorts(args: LightSailDriver.PutPortOptions): Promise<AWS.Lightsail.PutInstancePublicPortsResult>;
    function getAllInstances(): Promise<AWS.Lightsail.GetInstancesResult>;
    function getInstance(instanceName: string): Promise<AWS.Lightsail.GetInstanceResult>;
    function shutDownInstance(instanceName: string): Promise<AWS.Lightsail.StopInstanceResult>;
    function startInstance(instanceName: string): Promise<AWS.Lightsail.StartInstanceResult>;
    function rebootInstance(instanceName: string): Promise<AWS.Lightsail.RebootInstanceResult>;
    function getAllDomains(): Promise<AWS.Lightsail.GetDomainsResult>;
    function getDomain(domain_name: string): Promise<AWS.Lightsail.GetDomainResult>;
    function createDomain(domain_name: string, tags: Partial<Record<any, any>>[]): Promise<AWS.Lightsail.CreateDomainResult>;
    function deleteDomain(domain_name: string): Promise<AWS.Lightsail.DeleteDomainResult>;
}
