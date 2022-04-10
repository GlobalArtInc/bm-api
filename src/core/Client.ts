import {ClientOptions} from "../core/ClientOptions";
import {BotsProvider, UsersProvider} from "../providers";

export class Client {
    public options: ClientOptions
    public bots: BotsProvider
    public users: UsersProvider

    constructor(options: ClientOptions) {
        this.options = options

        this.bots = new BotsProvider(this.options)
        this.users = new UsersProvider(this.options)
    }
}
