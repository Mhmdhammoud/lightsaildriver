"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class Driver {
    //AWS Lightsail instance name
    constructor(options) {
        this.accessId = options.accessId;
        this.secretKey = options.secretKey;
        this.region = options.region;
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
    async getInstance(instanceName) {
        return await this.client
            .getInstance({
            instanceName,
        })
            .promise();
    }
    async openInstancePorts(args) {
        return this.client
            .openInstancePublicPorts({
            instanceName: args.instanceName,
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
            instanceName: args.instanceName,
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
            instanceName: args.instanceName,
            portInfos: args.portInfos,
        })
            .promise();
    }
    async shutDownInstance(instance_name) {
        const response = await this.getInstance(instance_name);
        if (!(response === null || response === void 0 ? void 0 : response.instance)) {
            return null;
        }
        return await this.client
            .stopInstance({
            instanceName: instance_name,
        })
            .promise();
    }
    async startInstance(instance_name) {
        const response = await this.getInstance(instance_name);
        if (!(response === null || response === void 0 ? void 0 : response.instance)) {
            return null;
        }
        return await this.client
            .startInstance({
            instanceName: instance_name,
        })
            .promise();
    }
    async rebootInstance(instance_name) {
        const response = await this.getInstance(instance_name);
        if (!(response === null || response === void 0 ? void 0 : response.instance)) {
            return null;
        }
        return await this.client
            .rebootInstance({
            instanceName: instance_name,
        })
            .promise();
    }
}
exports.default = Driver;
