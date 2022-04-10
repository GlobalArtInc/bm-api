import { ClientOptions } from "../core";
import { UsersProfileInterface } from "../interfaces";
export declare class UsersProvider {
    options: ClientOptions;
    constructor(options: ClientOptions);
    /**
     * get a user profile by ID
     * @param userId
     */
    profile(userId: string): Promise<UsersProfileInterface>;
}
