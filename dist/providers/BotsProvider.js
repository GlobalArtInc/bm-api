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
        var _a, _b, _c;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/bots/${botId}`, {
                method: "GET",
                headers: {
                    Authorization: (_a = this.options.token) !== null && _a !== void 0 ? _a : ""
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_c = (_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : "An error occurred");
        }
    }
    /**
     * Get the bot comments
     * @param botId - bot ID
     **/
    async comments(botId) {
        var _a, _b, _c;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/bots/${botId}/comments`, {
                method: "GET",
                headers: {
                    Authorization: (_a = this.options.token) !== null && _a !== void 0 ? _a : ""
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_c = (_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : "An error occurred");
        }
    }
    /**
     * Checking if specified user is voted for the bot
     * @param userId - user ID
     */
    async checkVote(userId) {
        var _a, _b, _c;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/bots/check/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: (_a = this.options.token) !== null && _a !== void 0 ? _a : ""
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_c = (_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : "An error occurred");
        }
    }
    /**
     * Publish the bot stats to the monitoring
     * @param data
     */
    async postStats(data) {
        var _a, _b, _c;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/bots/stats`, {
                method: "POST",
                headers: {
                    Authorization: (_a = this.options.token) !== null && _a !== void 0 ? _a : "",
                    ...data
                }
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_c = (_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : "An error occurred");
        }
    }
}
exports.BotsProvider = BotsProvider;
