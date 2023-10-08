import Logs from "@nodemedia/core/utils/logs";
import Tls from "tls";
import Fs from "fs";
import Net from "net";

export interface IRTMP {
  readonly port: number;
  readonly host: string;
  readonly tcpServer: TcpServer;
  readonly tlsServer: TlsServer;
  start(): void;
  stop(): void;
}

enum RTPort {
  RTMP = 1935,
  RTMPS = 443,
}

class TlsServer {
  private server: Tls.Server;
  constructor() {
    this.server = Tls.createServer(
      {
        key: Fs.readFileSync("./certs/key.pem"),
        cert: Fs.readFileSync("./certs/cert.pem"),
      },
      (socket) => {
        // TODO: Handle socket
      }
    );
  }

  public start(): void {
    Logs.info("Starting TLS server...");
    this.server.listen(RTPort.RTMPS, () => {
      Logs.info("TLS server started");
    });
  }

  public stop(): void {
    Logs.info("Stopping TLS server...");
    this.server.close(() => {
      Logs.info("TLS server stopped");
    });
  }
}

class TcpServer {
  private server: Net.Server;
  constructor() {
    this.server = Net.createServer((socket) => {
      // TODO: Handle socket
    });
  }

  public start(): void {
    Logs.info("Starting TCP server...");
    this.server.listen(RTPort.RTMP, () => {
      Logs.info("TCP server started");
    });
  }

  public stop(): void {
    Logs.info("Stopping TCP server...");
    this.server.close(() => {
      Logs.info("TCP server stopped");
    });
  }
}

export default class NodeRtmpServer {
  private tcpServer: TcpServer;
  private tlsServer: TlsServer;
  private port: number;
  private host: string;
  constructor(port: number, host: string) {
    this.tcpServer = new TcpServer();
    this.tlsServer = new TlsServer();

    this.port = port;
    this.host = host;
  }

  public start(): void {
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
    Logs.info("Starting RTMP server...");
  }

  public stop(): void {
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
    Logs.info("Stopping RTMP server...");
  }
}
