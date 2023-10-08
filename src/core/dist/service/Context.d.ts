/// <reference types="node" />
import EventEmitter from "events";
export default class Event {
    static sessions: Map<any, any>;
    static publishers: Map<any, any>;
    static idlePlayers: Set<unknown>;
    static nodeEvent: EventEmitter;
    static stat: {
        inbytes: number;
        outbytes: number;
        accepted: number;
    };
}
