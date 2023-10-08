/// <reference types="node" />
export default class Bitop {
    private buffer;
    private buflen;
    private bufpos;
    private bufoff;
    private iserro;
    constructor(buffer: Buffer);
    read(n: number): number;
    look(n: any): number;
    read_golomb(): number;
}
