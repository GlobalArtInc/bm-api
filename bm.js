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

    async refreshBotData(data) {
        if (!this.token)
            new Error("No token specified")
        return this.request({
            method: "POST",
            path: "/bots/stats",
            headers: {
                Authorization: this.token,
                ...data
            }
        });
    }

}

module.exports = BM;
