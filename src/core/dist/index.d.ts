import Logger from "./utils/Logs";
import NodeRtmpServer from "@nodemedia/core/service/NodeRtmpServer";
declare class NodeMediaServer {
    logs: Logger;
    config: any;
    nrs: NodeRtmpServer;
    nhs: any;
    nts: any;
    nls: any;
    nfs: any;
    constructor(config: any);
    run(): void;
    on(eventName: any, listener: any): void;
    stop(): void;
    getSession(id: any): any;
}
export default NodeMediaServer;
