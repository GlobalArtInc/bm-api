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
        var _a, _b, _c;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/profile/${userId}`, {
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
}
exports.UsersProvider = UsersProvider;
