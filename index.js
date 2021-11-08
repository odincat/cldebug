"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initClDebug = exports.isProduction = void 0;
exports.isProduction = false;
/**
 * @deprecated Use cLog.initialize() insstead
 */
function initClDebug() {
    if (!exports.isProduction) {
        exports.isProduction = true;
    }
}
exports.initClDebug = initClDebug;
/**
 * Logs something to console.
 */
function cLog(type, message, expectedbehavior) {
    cLog.prototype.initialize = function () {
        if (!exports.isProduction) {
            exports.isProduction = true;
        }
    };
    cLog.prototype.isInitialized = function () {
        return exports.isProduction;
    };
    if (exports.isProduction) {
        var prefix = '';
        var format = '';
        switch (type) {
            case 'info':
            case 'inf':
            case 'if':
            case 'i':
                prefix = 'ℹ Info: ';
                format = 'font-size: 17px;color: #185ADB;';
                break;
            case 'error':
            case 'err':
            case 'er':
            case 'e':
                prefix = '✗ There was an error: ';
                format = 'font-size: 17px; color: #DA0037;';
                break;
            case 'throwerror':
            case 'throwe':
            case 'terr':
            case 'te':
            case 'e!':
                prefix = '✗ There was an error: ';
                format = 'font-size: 17px; color: #DA0037;';
                if (expectedbehavior == null) {
                    console.error('%c ' + prefix + message, format);
                }
                else {
                    console.error('%c ' + prefix + message + ' → (' + expectedbehavior + ')', format);
                }
                return;
            case 'sucess':
            case 'suc':
            case 'su':
            case 's':
                prefix = '✓ Sucess: ';
                format = 'font-size: 17px; color: #66DE93;';
                break;
            default:
                prefix = 'ℹ Info: ';
                format = 'font-size: 17px;color: #185ADB;';
                break;
        }
        if (expectedbehavior == null) {
            console.log('%c ' + prefix + message, format);
        }
        else {
            console.log('%c ' + prefix + message + ' → (' + expectedbehavior + ')', format);
        }
    }
}
exports.default = cLog;
