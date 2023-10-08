"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
class Event {
}
Event.sessions = new Map();
Event.publishers = new Map();
Event.idlePlayers = new Set();
Event.nodeEvent = new events_1.default();
Event.stat = {
    inbytes: 0,
    outbytes: 0,
    accepted: 0,
};
exports.default = Event;
