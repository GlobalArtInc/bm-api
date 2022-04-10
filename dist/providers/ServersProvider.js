"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServersProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("../core");
const axios_1 = tslib_1.__importDefault(require("axios"));
class ServersProvider {
    constructor(options) {
        this.options = options;
    }
    async info(serverId) {
        var _a, _b;
        try {
            const response = await (0, axios_1.default)(`${core_1.Endpoints.API_URL}/server/${serverId}`, {
                method: "GET"
            });
            return Promise.resolve(response.data);
        }
        catch (err) {
            return Promise.reject((_b = (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : "An error occurred");
        }
    }
}
exports.ServersProvider = ServersProvider;
