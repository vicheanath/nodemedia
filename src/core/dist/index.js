"use strict";
//
//  Created by Mingliang Chen on 17/8/1.
//  illuspas[a]gmail.com
//  Copyright (c) 2018 Nodemedia. All rights reserved.
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logs_1 = __importDefault(require("./utils/Logs"));
const NodeRtmpServer_1 = __importDefault(require("@nodemedia/core/service/NodeRtmpServer"));
// import NodeHttpServer from "@nodemedia/core/service/NodeHttpServer";
// import NodeTransServer from "@nodemedia/core/service/NodeTransServer";
// import NodeRelayServer from "@nodemedia/core/service/NodeRelayServer";
// import NodeFissionServer from "@nodemedia/core/service/NodeFissionServer";
const Context_1 = __importDefault(require("@nodemedia/core/service/Context"));
// import Package from "@nodemedia/core/package.json";
// interface INodeMediaServer {
//   config: any;
//   nrs: NodeRtmpServer;
//   logs: Logger;
//   run(): void;
//   stop(): void;
//   getSession(id: any): any;
//   on(eventName: any, listener: any): void;
// }
class NodeMediaServer {
    constructor(config) {
        this.logs = new Logs_1.default();
        this.config = config;
        this.nrs = new NodeRtmpServer_1.default(8080, "127.0.0.1");
    }
    run() {
        this.nrs.start();
        process.on("uncaughtException", function (err) {
            Logs_1.default.error("uncaughtException");
        });
        process.on("SIGINT", function () {
            process.exit();
        });
        // Https.get("https://registry.npmjs.org/node-media-server", function (res) {
        //   let size = 0;
        //   let chunks = [] as any;
        //   res.on("data", function (chunk) {
        //     size += chunk.length;
        //     chunks.push(chunk);
        //   });
        //   res.on("end", function () {
        //     let data = Buffer.concat(chunks, size);
        //     let jsonData = JSON.parse(data.toString());
        //     let latestVersion = jsonData["dist-tags"]["latest"];
        //     let latestVersionNum =
        //       (latestVersion.split(".")[0] << 16) |
        //       (latestVersion.split(".")[1] << 8) |
        //       (latestVersion.split(".")[2] & 0xff);
        //     let thisVersionNum =
        //       (Package.version.split(".")[0] << 16) |
        //       (Package.version.split(".")[1] << 8) |
        //       (Package.version.split(".")[2] & 0xff);
        //     if (thisVersionNum < latestVersionNum) {
        //       Logger.warn(
        //         `There is a new version ${latestVersion} that can be updated`
        //       );
        //     }
        //   });
        // }).on("error", function (e) {});
    }
    on(eventName, listener) {
        Context_1.default.nodeEvent.on(eventName, listener);
    }
    stop() {
        if (this.nrs) {
            this.nrs.stop();
        }
        if (this.nhs) {
            this.nhs.stop();
        }
        if (this.nls) {
            this.nls.stop();
        }
        if (this.nfs) {
            this.nfs.stop();
        }
    }
    getSession(id) {
        return Context_1.default.sessions.get(id);
    }
}
exports.default = NodeMediaServer;
