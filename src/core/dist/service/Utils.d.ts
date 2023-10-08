declare function generateNewSessionID(): string;
declare function genRandomName(): string;
declare function verifyAuth(signStr: any, streamId: any, secretKey: any): boolean;
declare function getFFmpegVersion(ffpath: any): Promise<unknown>;
declare function getFFmpegUrl(): string;
export { generateNewSessionID, verifyAuth, genRandomName, getFFmpegVersion, getFFmpegUrl, };
