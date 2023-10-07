/**
 * Logs
 * @description Logs class
 * @export
 * @class Logs
 * @implements {ILogs}
 * @example
 * import Logs from '@core/utils/logs';
 * const logs = new Logs();
 * logs.info('Hello world');
 * logs.success('Hello world');
 * logs.warning('Hello world');
 * logs.error('Hello world');
 * logs.debug('Hello world');
 * logs.custom('Hello world', 'red');
 * logs.custom('Hello world', 'red', 'bgWhite');
 * logs.custom('Hello world', 'red', 'bgWhite', 'bold');
 * logs.custom('Hello world', 'red', 'bgWhite', 'bold', 'underline');
 * logs.custom('Hello world', 'red', 'bgWhite', 'bold', 'underline', 'dim');
 * logs.custom('Hello world', 'red', 'bgWhite', 'bold', 'underline', 'dim', 'italic');
 *
 */

import Chalk from "chalk";

enum ELogType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  DEBUG = "debug",
}

export default class Logs {
  private logType: ELogType;
  constructor() {
    this.logType = ELogType.INFO;
  }

  private setLogType(logType: ELogType): void {
    this.logType = logType;
  }

  private logTime(): string {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  private logDate(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public info(...message: any[]): void {
    this.setLogType(ELogType.INFO);
    console.log(
      `${Chalk.blueBright("[INFO]")} ${this.logDate()} ${this.logTime()}`,
      ...message
    );
  }

  public success(...message: any[]): void {
    this.setLogType(ELogType.SUCCESS);
    console.log(
      `${Chalk.greenBright("[SUCCESS]")} ${this.logDate()} ${this.logTime()}`,
      ...message
    );
  }

  public warning(...message: any[]): void {
    this.setLogType(ELogType.WARNING);
    console.log(
      `${Chalk.yellowBright("[WARNING]")} ${this.logDate()} ${this.logTime()}`,
      ...message
    );
  }

  public error(...message: any[]): void {
    this.setLogType(ELogType.ERROR);
    console.log(
      `${Chalk.redBright("[ERROR]")} ${this.logDate()} ${this.logTime()}`,
      ...message
    );
  }

  public debug(...message: any[]): void {
    this.setLogType(ELogType.DEBUG);
    console.log(
      `${Chalk.magentaBright("[DEBUG]")} ${this.logDate()} ${this.logTime()}`,
      ...message
    );
  }

  public custom(message: string, ...styles: string[]): void {
    let style: any = Chalk;
    styles.forEach((s: string) => {
      style = style[s];
    });
    console.log(
      `${style(
        `[${this.getLogType().toUpperCase()}]`
      )} ${this.logDate()} ${this.logTime()}`,
      message
    );
  }

  public getLogType(): ELogType {
    return this.logType;
  }
}
