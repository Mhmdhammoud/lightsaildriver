export declare namespace LightSailDriver {
    interface Instance {
        accessId: string;
        secretKey: string;
        region: string;
    }
    interface PortOptions {
        instanceName: string;
    }
    interface PortInfo extends PortOptions {
        fromPort: number;
        toPort: number;
        protocol: 'tcp' | 'udp' | 'all' | 'icmp';
    }
    interface OpenPortInfo extends PortInfo {
        cidrs?: string[];
    }
    type ClosePortInfo = PortInfo;
    type PutPortInfo = PortInfo[];
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
}
