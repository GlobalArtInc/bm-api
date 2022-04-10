export interface BotsInfoInterface {
    avatar: string;
    botID: string;
    username: string;
    discrim: string;
    shortDesc: string;
    prefix: string;
    votes: number;
    ownerID: string;
    coowners: string[];
    tags: string[];
    longDesc: string;
    certificate: string;
    website: string;
}
export interface BotsPostData {
    serverCount?: number;
    shardCount?: number;
}
