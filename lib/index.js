"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __importDefault(require("./data"));
function Language(_a) {
    var name = _a.name, fileExtension = _a.fileExtension;
    var language = data_1.default.filter(function (languageData) {
        if (name) {
            return languageData.name.toLowerCase() === name.toLowerCase();
        }
        else if (fileExtension) {
            return languageData.fileExtension.includes(fileExtension);
        }
    });
    if (language) {
        return language;
    }
    else {
        throw new Error('Language not found');
    }
}
exports.default = Language;
