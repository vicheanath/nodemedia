/// <reference types="node" />
declare class NodeFlvSession {
    private config;
    private req;
    private res;
    private id;
    private ip;
    private playStreamPath;
    private playArgs;
    private isStarting;
    private isPlaying;
    private isIdling;
    private connectTime;
    private TAG;
    private numPlayCache;
    private connectCmdObj;
    constructor(config: any, req: any, res: any);
    run(): void;
    stop(): void;
    onReqClose(): void;
    onReqError(e: any): void;
    reject(): void;
    onPlay(): void;
    onStartPlay(): void;
    static createFlvTag(packet: any): Buffer;
}
export default NodeFlvSession;
