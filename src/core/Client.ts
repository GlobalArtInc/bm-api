import {ClientOptions} from "./ClientOptions";
import {BotsProvider, UsersProvider} from "../providers";
import {ServersProvider} from "../providers/ServersProvider";

export class Client {
    public options: ClientOptions
    public bots: BotsProvider
    public users: UsersProvider
    public servers: ServersProvider

    constructor(options: ClientOptions) {
        this.options = options

        this.bots = new BotsProvider(this.options)
        this.users = new UsersProvider(this.options)
        this.servers = new ServersProvider(this.options)
    }
}
