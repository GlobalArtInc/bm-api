const axios = require("axios");

class BM {
    constructor(token = null) {
        this.token = token;
        this.apiUrl = "https://monitor.betterbot.ru/api"
    }

    async request(data) {
        if (!data.path)
            new Error("No path specified");
        const method = data.method ?? "GET"
        try {
            const response = await axios({
                method,
                baseURL: this.apiUrl,
                url: data.path,
                headers: data.headers
            });
            return response.data;
        } catch (err) {
            console.error(err)
        }
    }

    async getBot(botId) {
        return this.request({
            method: "GET",
            path: "/bots/" + botId
        });
    }

    async getBotComments(botId) {
        return this.request({
            method: "GET",
            path: "/bots/" + botId + "/comments"
        });
    }

    async checkVote(userId) {
        if (!this.token)
            new Error("No token specified")
        return this.request({
            method: "GET",
            path: "/bots/check/" + userId,
            headers: {
                Authorization: this.token
            }
        })
    }

    async getProfile(userId) {
        return this.request({
            method: "GET",
            path: "/profile/" + userId
        })
    }

    async refreshBotData(data) {
        if (!this.token)
            new Error("No token specified")
        return this.request({
            method: "GET",
            path: "/bots/stats",
            headers: {
                Authorization: this.token,
                ...data
            }
        });
    }

    async getServer(serverId) {
        return this.request({
            method: "GET",
            path: "/server/" + serverId
        });
    }

}

module.exports = BM;
