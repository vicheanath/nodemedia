import EventEmitter from "events";

export default class Event {
  public static sessions: Map<any, any> = new Map();
  public static publishers: Map<any, any> = new Map();
  public static idlePlayers = new Set();
  public static nodeEvent: EventEmitter = new EventEmitter();
  public static stat = {
    inbytes: 0,
    outbytes: 0,
    accepted: 0,
  };
}
