import { ClientOptions } from "../core";
import { BotsInfoInterface } from "../interfaces";
import { BotsPostData } from "../interfaces/BotsInterface";
export declare class BotsProvider {
    options: ClientOptions;
    constructor(options: ClientOptions);
    /**
     * Get bot information by botId
     * @param botId - bot ID
     **/
    info(botId: string): Promise<BotsInfoInterface>;
    /**
     * Get the bot comments
     * @param botId - bot ID
     **/
    comments(botId: string): Promise<any>;
    /**
     * Checking if specified user is voted for the bot
     * @param userId - user ID
     */
    checkVote(userId: string): Promise<any>;
    /**
     * Publish the bot stats to the monitoring
     * @param data
     */
    postStats(data: BotsPostData): Promise<any>;
}
