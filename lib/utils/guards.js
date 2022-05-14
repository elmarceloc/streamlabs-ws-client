"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchFollow>}
 */
exports.isFollow = (event) => {
    return event.type === "follow";
};
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchSub>}
 */
exports.isSubscription = (event) => {
    return event.type === "subscription";
};
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchBits>}
 */
exports.isBits = (event) => {
    return event.type === "bits";
};
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchHost>}
 */
exports.isHost = (event) => {
    return event.type === "host";
};
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchRaid>}
 */
exports.isRaid = (event) => {
    return event.type === "raid";
};
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchMerch>}
 */
exports.isMerch = (event) => {
    return event.type === "merch";
};
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<IStreamlabsDonation>}
 */
exports.isDonation = (event) => {
    const coercedEvent = event;
    return coercedEvent.type === "donation" || (coercedEvent.type === undefined && coercedEvent.for === "streamlabs");
};
//# sourceMappingURL=guards.js.map