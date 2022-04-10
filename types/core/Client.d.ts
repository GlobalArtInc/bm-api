import { ClientOptions } from "./ClientOptions";
import { BotsProvider, UsersProvider } from "../providers";
import { ServersProvider } from "../providers/ServersProvider";
export declare class Client {
    options: ClientOptions;
    bots: BotsProvider;
    users: UsersProvider;
    servers: ServersProvider;
    constructor(options: ClientOptions);
}
