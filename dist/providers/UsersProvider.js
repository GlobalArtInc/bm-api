"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("../core");
const axios_1 = tslib_1.__importDefault(require("axios"));
class UsersProvider {
    constructor(options) {
        this.options = options;
    }
    /**
     * get a user profile by ID
     * @param userId
     */
    async profile(userId) {
        var _a, _b;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/profile/${userId}`, {
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
exports.UsersProvider = UsersProvider;
