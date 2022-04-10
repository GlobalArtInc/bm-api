import {ClientOptions, Endpoints} from "../core";
import {ServersInfoInterface} from "../interfaces/ServersInterface";
import axios from "axios";

export class ServersProvider {
    constructor(
        public options: ClientOptions
    ) {
    }

    /**
     * Get server info by ID
     * @param serverId - server ID
     **/
    async info(serverId: string): Promise<ServersInfoInterface> {
        try {
            const response = await axios(`${Endpoints.API_URL}/server/${serverId}`, {
                method: "GET"
            })
            return Promise.resolve(response.data)
        } catch (err: any) {
            return Promise.reject(err?.response?.data ?? "An error occurred")
        }
    }
}
