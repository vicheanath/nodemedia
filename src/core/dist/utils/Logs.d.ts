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
declare enum ELogType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    DEBUG = "debug"
}
export default class Logs {
    private logType;
    constructor();
    private setLogType;
    private logTime;
    private logDate;
    static info(message: string): void;
    static success(message: string): void;
    static warning(message: string): void;
    static error(message: string): void;
    static debug(message: string): void;
    getLogType(): ELogType;
}
export {};
