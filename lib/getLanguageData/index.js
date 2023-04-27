"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __importDefault(require("../data"));
function getLanguageData(_a) {
    var name = _a.name, fileExtension = _a.fileExtension, prismTag = _a.prismTag;
    var language = data_1.default.filter(function (languageData) {
        if (name) {
            return languageData.name.toLowerCase() === name.toLowerCase();
        }
        else if (fileExtension) {
            if (fileExtension[0] === '.') {
                fileExtension = fileExtension.slice(1);
            }
            return languageData.fileExtension.includes(fileExtension);
        }
        else if (prismTag) {
            return languageData.prismTag === prismTag;
        }
    });
    if (language) {
        return language;
    }
    else {
        return [];
    }
}
exports.default = getLanguageData;
