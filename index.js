"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initClDebug = exports.isClDebugEnabled = void 0;
exports.isClDebugEnabled = false;
function initClDebug() {
    if (!exports.isClDebugEnabled) {
        exports.isClDebugEnabled = true;
    }
}
exports.initClDebug = initClDebug;
/**
 * Logs something to console.
 */
function cLog(type, message, expectedbehavior) {
    if (exports.isClDebugEnabled) {
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
