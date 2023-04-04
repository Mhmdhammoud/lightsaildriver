export declare namespace LightSailDriver {
    interface Instance {
        accessId: string;
        secretKey: string;
        region: string;
        instanceName: string;
    }
    interface PortOptions {
        instanceName: String;
    }
    interface PortInfo {
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
}
