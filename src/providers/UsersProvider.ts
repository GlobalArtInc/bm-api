import {ClientOptions, Endpoints} from "../core";
import axios from "axios";

export class UsersProvider {
    constructor(
        public options: ClientOptions
    ) {
    }

    /**
     * get a user profile by ID
     * @param userId
     */

    async profile(userId: string) {
        try {
            const response = await axios.get(`${Endpoints.API_URL}/profile/${userId}`, {
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