import {ClientOptions, Endpoints} from "../core";
import axios from "axios";
import {BotsInfoInterface} from "../interfaces";

export class BotsProvider {
    constructor(
        public options: ClientOptions
    ) {
    }

    /**
     * Get bot information by botId
     * @param botId - bot ID
     **/
    async info(botId: string): Promise<BotsInfoInterface> {
        try {
            const response = await axios.get(`${Endpoints.API_URL}/bots/${botId}`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token
                }
            })
            return Promise.resolve(response.data)
        } catch (err: any) {
            return Promise.reject(err?.response?.data ?? "An error occurred")
        }
    }

    /**
     * Get the bot comments
     * @param botId - bot ID
     **/
    async comments(botId: string) {
        try {
            const response = await axios.get(`${Endpoints.API_URL}/bots/${botId}/comments`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token
                }
            })
            return Promise.resolve(response.data)
        } catch (err: any) {
            return Promise.reject(err?.response?.data ?? "An error occurred")
        }
    }

    /**
     * Checking if specified user is voted for the bot
     * @param userId - user ID
     * */
    async checkVote(userId: string) {
        try {
            const response = await axios.get(`${Endpoints.API_URL}/bots/check/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token
                }
            })
            return Promise.resolve(response.data)
        } catch (err: any) {
            return Promise.reject(err?.response?.data ?? "An error occurred")
        }
    }
}
