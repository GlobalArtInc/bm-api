import { ClientOptions } from "../core";
import { ServersInfoInterface } from "../interfaces/ServersInterface";
export declare class ServersProvider {
    options: ClientOptions;
    constructor(options: ClientOptions);
    info(serverId: string): Promise<ServersInfoInterface>;
}
