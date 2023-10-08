"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
var ELogType;
(function (ELogType) {
    ELogType["INFO"] = "info";
    ELogType["SUCCESS"] = "success";
    ELogType["WARNING"] = "warning";
    ELogType["ERROR"] = "error";
    ELogType["DEBUG"] = "debug";
})(ELogType || (ELogType = {}));
class Logs {
    constructor() {
        this.logType = ELogType.INFO;
    }
    setLogType(logType) {
        this.logType = logType;
    }
    logTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    }
    logDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    static info(message) {
        console.log(`${chalk_1.default.blueBright("[INFO]")} ${message}`);
    }
    static success(message) {
        console.log(`${chalk_1.default.greenBright("[SUCCESS]")} ${message}`);
    }
    static warning(message) {
        console.log(`${chalk_1.default.yellowBright("[WARNING]")} ${message}`);
    }
    static error(message) {
        console.log(`${chalk_1.default.redBright("[ERROR]")} ${message}`);
    }
    static debug(message) {
        console.log(`${chalk_1.default.magentaBright("[DEBUG]")} ${message}`);
    }
    getLogType() {
        return this.logType;
    }
}
exports.default = Logs;
