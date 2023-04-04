export interface ILocation {
    availabilityZone: string;
    regionName: string;
}
export interface IHardware {
    cpuCount: number;
    disks: IDisk[];
    ramSizeInGb: number;
}
export interface IDisk {
    createdAt: string;
    sizeInGb: number;
    isSystemDisk: boolean;
    path: string;
    attachedTo: string;
    attachmentState: string;
}
export interface INetworking {
    monthlyTransfer: IMonthlyTransfer;
    ports: IPort[];
}
export interface IMonthlyTransfer {
    gbPerMonthAllocated: number;
}
export interface IPort {
    fromPort: number;
    toPort: number;
    protocol: string;
    accessFrom: string;
    accessType: string;
    commonName: string;
    cidrs: string[];
}
export interface IState {
    code: number;
    name: string;
}
export interface IInstance {
    name: string;
    arn: string;
    supportCode: string;
    createdAt: string;
    location: ILocation;
    resourceType: string;
    blueprintId: string;
    blueprintName: string;
    bundleId: string;
    isStaticIp: boolean;
    privateIpAddress: string;
    publicIpAddress: string;
    ipAddressType: string;
    hardware: IHardware;
    networking: INetworking;
    state: IState;
    username: string;
    sshKeyName: string;
}
