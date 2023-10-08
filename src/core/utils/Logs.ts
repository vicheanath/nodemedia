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

  public static info(message: string): void {
    console.log(`${Chalk.blueBright("[INFO]")} ${message}`);
  }

  public static success(message: string): void {
    console.log(`${Chalk.greenBright("[SUCCESS]")} ${message}`);
  }

  public static warning(message: string): void {
    console.log(`${Chalk.yellowBright("[WARNING]")} ${message}`);
  }

  public static error(message: string): void {
    console.log(`${Chalk.redBright("[ERROR]")} ${message}`);
  }

  public static debug(message: string): void {
    console.log(`${Chalk.magentaBright("[DEBUG]")} ${message}`);
  }

  public getLogType(): ELogType {
    return this.logType;
  }
}
