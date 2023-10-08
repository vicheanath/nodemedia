//
//  Created by Mingliang Chen on 17/8/1.
//  illuspas[a]gmail.com
//  Copyright (c) 2018 Nodemedia. All rights reserved.
//

// const Https = require('https');
// const Logger = require('./node_core_logger');
// const NodeRtmpServer = require('./node_rtmp_server');
// const NodeHttpServer = require('./node_http_server');
// const NodeTransServer = require('./node_trans_server');
// const NodeRelayServer = require('./node_relay_server');
// const NodeFissionServer = require('./node_fission_server');
// const context = require('./node_core_ctx');
// const Package = require('../package.json');

import Https from "https";
import Logger from "./utils/Logs";
import NodeRtmpServer from "@nodemedia/core/service/NodeRtmpServer";
// import NodeHttpServer from "@nodemedia/core/service/NodeHttpServer";
// import NodeTransServer from "@nodemedia/core/service/NodeTransServer";
// import NodeRelayServer from "@nodemedia/core/service/NodeRelayServer";
// import NodeFissionServer from "@nodemedia/core/service/NodeFissionServer";
import context from "@nodemedia/core/service/Context";
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
  logs: Logger = new Logger();
  config: any;
  nrs: NodeRtmpServer;
  nhs: any;
  nts: any;
  nls: any;
  nfs: any;

  constructor(config: any) {
    this.config = config;
    this.nrs = new NodeRtmpServer(8080, "127.0.0.1");
  }

  public run(): void {
      this.nrs.start();
    


    process.on("uncaughtException", function (err : any) {
      Logger.error("uncaughtException");
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

  on(eventName: any, listener: any) : void {
    context.nodeEvent.on(eventName, listener);
  }

  stop() : void {
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

  getSession(id: any) :any {
    return context.sessions.get(id);
  }
}

export default NodeMediaServer;
