"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client
var streamlabs_1 = require("./streamlabs");
exports.StreamlabsClient = streamlabs_1.default;
// Type guards
var guards_1 = require("./utils/guards");
exports.isBits = guards_1.isBits;
exports.isDonation = guards_1.isDonation;
exports.isFollow = guards_1.isFollow;
exports.isSubscription = guards_1.isSubscription;
exports.isHost = guards_1.isHost;
exports.isRaid = guards_1.isRaid;
exports.isMerch = guards_1.isMerch;
//# sourceMappingURL=index.js.map