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
  private logs: Logs;
  private server: Tls.Server;
  constructor() {
    this.logs = new Logs();
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
    this.logs.info("Starting TLS server...");
    this.server.listen(RTPort.RTMPS, () => {
      this.logs.info("TLS server started");
    });
  }

  public stop(): void {
    this.logs.info("Stopping TLS server...");
    this.server.close(() => {
      this.logs.info("TLS server stopped");
    });
  }
}

class TcpServer {
  private logs: Logs;
  private server: Net.Server;
  constructor() {
    this.logs = new Logs();
    this.server = Net.createServer((socket) => {
      // TODO: Handle socket
    });
  }

  public start(): void {
    this.logs.info("Starting TCP server...");
    this.server.listen(RTPort.RTMP, () => {
      this.logs.info("TCP server started");
    });
  }

  public stop(): void {
    this.logs.info("Stopping TCP server...");
    this.server.close(() => {
      this.logs.info("TCP server stopped");
    });
  }
}

export default class RTMP<T extends IRTMP> {
  private logs: Logs;
  private tcpServer: TcpServer;
  private tlsServer: TlsServer;
  private port: number;
  private host: string;
  constructor(port: number, host: string) {
    this.logs = new Logs();
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
    this.logs.info("Starting RTMP server...");
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
    this.logs.info("Stopping RTMP server...");
  }
}
