"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require("md5");
/**
 * Choose a deterministic random number between 0 and 100
 */
function randomBin(seed) {
    return parseInt(md5(seed).substring(0, 4), 16) % 100;
}
exports.randomBin = randomBin;
/**
 * Choose a deterministic variant.
 */
function chooseVariant(trackingId, code, variants) {
    var bin = randomBin(code + trackingId);
    var binSize = 100 / variants.length;
    for (var i = 0; i < variants.length; i++) {
        if (bin < (i + 1) * binSize) {
            return variants[i];
        }
    }
    return variants[variants.length - 1];
}
exports.chooseVariant = chooseVariant;
