export interface IRTMP {
    readonly port: number;
    readonly host: string;
    readonly tcpServer: TcpServer;
    readonly tlsServer: TlsServer;
    start(): void;
    stop(): void;
}
declare class TlsServer {
    private server;
    constructor();
    start(): void;
    stop(): void;
}
declare class TcpServer {
    private server;
    constructor();
    start(): void;
    stop(): void;
}
export default class NodeRtmpServer {
    private tcpServer;
    private tlsServer;
    private port;
    private host;
    constructor(port: number, host: string);
    start(): void;
    stop(): void;
}
export {};
