"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class Driver {
    constructor(options) {
        this.accessId = options.accessId;
        this.secretKey = options.secretKey;
        this.region = options.region;
        this.instanceName = options.instanceName;
        this.client = new aws_sdk_1.default.Lightsail({
            accessKeyId: options.accessId,
            secretAccessKey: options.secretKey,
            region: options.region,
        });
    }
    getClient() {
        return this.client;
    }
    async getAllInstances() {
        return await this.client.getInstances().promise();
    }
    async openInstancePorts(args) {
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
            .promise();
    }
    async closeInstancePorts(args) {
        return this.client
            .closeInstancePublicPorts({
            instanceName: this.instanceName,
            portInfo: {
                fromPort: args.fromPort,
                toPort: args.toPort,
                protocol: args.protocol,
            },
        })
            .promise();
    }
    async editInstancePorts(args) {
        return await this.client
            .putInstancePublicPorts({
            instanceName: this.instanceName,
            portInfos: args.portInfos,
        })
            .promise();
    }
}
exports.default = Driver;
