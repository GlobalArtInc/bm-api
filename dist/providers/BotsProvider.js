"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotsProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("../core");
const axios_1 = tslib_1.__importDefault(require("axios"));
class BotsProvider {
    constructor(options) {
        this.options = options;
    }
    /**
     * Get bot information by botId
     * @param botId - bot ID
     **/
    async info(botId) {
        var _a, _b;
        try {
            const response = await axios_1.default.get(`${core_1.Endpoints.API_URL}/bots/${botId}`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : "An error occurred");
        }
    }
    /**
     * Get bot comments
     * @param botId - bot ID
     **/
    async comments(botId) {
        var _a, _b;
        try {
            const response = await axios_1.default.get(`${core_1.Endpoints.API_URL}/bots/${botId}/comments`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : "An error occurred");
        }
    }
    /**
     * Checking if specified user is voted for the bot
     * @param userId - user ID
     * */
    async checkVote(userId) {
        var _a, _b;
        try {
            const response = await axios_1.default.get(`${core_1.Endpoints.API_URL}/bots/check/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: this.options.token
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : "An error occurred");
        }
    }
}
exports.BotsProvider = BotsProvider;
