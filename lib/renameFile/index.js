"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __importDefault(require("../data"));
var codinasion_tools_1 = require("codinasion-tools");
function renameFile(_a) {
    var name = _a.name, fileExtension = _a.fileExtension, _b = _a.fileName, fileName = _b === void 0 ? 'file-name' : _b;
    var language = data_1.default.filter(function (languageData) {
        if (name) {
            return languageData.name.toLowerCase() === name.toLowerCase();
        }
        else if (fileExtension) {
            var tempFileExtension = '';
            if (fileExtension[0] === '.') {
                tempFileExtension = fileExtension.slice(1);
            }
            return languageData.fileExtension.includes(tempFileExtension);
        }
        else if (fileName) {
            var tempFileExtension = fileName.split('.').pop();
            if (tempFileExtension) {
                return languageData.fileExtension.includes(tempFileExtension);
            }
        }
    });
    var namingConvention = language[0].namingConvention;
    var fileSlug = fileName.split('.')[0];
    var fileExt = fileName.split('.').pop();
    switch (namingConvention) {
        case 'PascalCase':
            fileSlug = (0, codinasion_tools_1.FormatToPascalCase)(fileSlug);
            break;
        case 'camelCase':
            fileSlug = (0, codinasion_tools_1.FormatToCamelCase)(fileSlug);
            break;
        case 'snake_case':
            fileSlug = (0, codinasion_tools_1.FormatToSnakeCase)(fileSlug);
            break;
        case 'kebab-case':
            fileSlug = (0, codinasion_tools_1.FormatToKebabCase)(fileSlug);
            break;
        default:
            break;
    }
    return "".concat(fileSlug, ".").concat(fileExt);
}
exports.default = renameFile;
