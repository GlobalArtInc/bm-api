import {ClientOptions, Endpoints} from "../core";
import axios from "axios";
import {UsersProfileInterface} from "../interfaces";

export class UsersProvider {
    constructor(
        public options: ClientOptions
    ) {
    }

    /**
     * Get a user profile by ID
     * @param userId - userId
     */
    async profile(userId: string): Promise<UsersProfileInterface> {
        try {
            const response = await axios(`${Endpoints.API_URL}/profile/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token ?? ""
                }
            })
            return Promise.resolve(response.data)
        } catch (err: any) {
            return Promise.reject(err?.response?.data ?? "An error occurred")
        }
    }
}
