"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logs_1 = __importDefault(require("@nodemedia/core/utils/logs"));
const tls_1 = __importDefault(require("tls"));
const fs_1 = __importDefault(require("fs"));
const net_1 = __importDefault(require("net"));
var RTPort;
(function (RTPort) {
    RTPort[RTPort["RTMP"] = 1935] = "RTMP";
    RTPort[RTPort["RTMPS"] = 443] = "RTMPS";
})(RTPort || (RTPort = {}));
class TlsServer {
    constructor() {
        this.server = tls_1.default.createServer({
            key: fs_1.default.readFileSync("./certs/key.pem"),
            cert: fs_1.default.readFileSync("./certs/cert.pem"),
        }, (socket) => {
            // TODO: Handle socket
        });
    }
    start() {
        logs_1.default.info("Starting TLS server...");
        this.server.listen(RTPort.RTMPS, () => {
            logs_1.default.info("TLS server started");
        });
    }
    stop() {
        logs_1.default.info("Stopping TLS server...");
        this.server.close(() => {
            logs_1.default.info("TLS server stopped");
        });
    }
}
class TcpServer {
    constructor() {
        this.server = net_1.default.createServer((socket) => {
            // TODO: Handle socket
        });
    }
    start() {
        logs_1.default.info("Starting TCP server...");
        this.server.listen(RTPort.RTMP, () => {
            logs_1.default.info("TCP server started");
        });
    }
    stop() {
        logs_1.default.info("Stopping TCP server...");
        this.server.close(() => {
            logs_1.default.info("TCP server stopped");
        });
    }
}
class NodeRtmpServer {
    constructor(port, host) {
        this.tcpServer = new TcpServer();
        this.tlsServer = new TlsServer();
        this.port = port;
        this.host = host;
    }
    start() {
        switch (this.port) {
            case RTPort.RTMP:
                this.tcpServer.start();
                break;
            case RTPort.RTMPS:
                this.tlsServer.start();
                break;
            default:
                this.tcpServer.start();
                this.tlsServer.start();
                break;
        }
        logs_1.default.info("Starting RTMP server...");
    }
    stop() {
        switch (this.port) {
            case RTPort.RTMP:
                this.tcpServer.stop();
                break;
            case RTPort.RTMPS:
                this.tlsServer.stop();
                break;
            default:
                this.tcpServer.stop();
                this.tlsServer.stop();
                break;
        }
        logs_1.default.info("Stopping RTMP server...");
    }
}
exports.default = NodeRtmpServer;
