"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryCode = getCountryCode;
exports.getLanguageCode = getLanguageCode;
const countryToLanguageCode_1 = require("./countryToLanguageCode");
const languageToCountryCode_1 = require("./languageToCountryCode");
const inverted = Object.entries(languageToCountryCode_1.languageToCountryCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});
function getCountryCode(languageCode) {
    return (languageToCountryCode_1.languageToCountryCode[languageCode] ||
        languageCode.toUpperCase());
}
function getLanguageCode(countryCode) {
    var _a;
    return (((_a = countryToLanguageCode_1.countryToLanguageCode[countryCode]) === null || _a === void 0 ? void 0 : _a[0]) || countryCode.toLowerCase());
}
