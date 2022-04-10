import { ClientOptions } from "../core";
export declare class BotsProvider {
    options: ClientOptions;
    constructor(options: ClientOptions);
    /**
     * Get bot information by botId
     * @param botId - bot ID
     **/
    info(botId: string): Promise<any>;
    /**
     * Get bot comments
     * @param botId - bot ID
     **/
    comments(botId: string): Promise<any>;
    /**
     * Checking if specified user is voted for the bot
     * @param userId - user ID
     * */
    checkVote(userId: string): Promise<any>;
}
