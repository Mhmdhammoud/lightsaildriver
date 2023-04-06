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
}
export default Driver;
