"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const providers_1 = require("../providers");
class Client {
    constructor(options) {
        this.options = options;
        this.bots = new providers_1.BotsProvider(this.options);
        this.users = new providers_1.UsersProvider(this.options);
    }
}
exports.Client = Client;
