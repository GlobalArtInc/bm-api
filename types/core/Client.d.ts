import { ClientOptions } from "../core/ClientOptions";
import { BotsProvider, UsersProvider } from "../providers";
export declare class Client {
    options: ClientOptions;
    bots: BotsProvider;
    users: UsersProvider;
    constructor(options: ClientOptions);
}
