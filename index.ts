export var isProduction:boolean = false;

/**
 * @deprecated Use cLog.initialize() insstead
 */
export function initClDebug() {
    if(!isProduction) {
        isProduction = true;
    }
}

/**
 * Logs something to console.
 */
export default function cLog(type:string, message:any, expectedbehavior?:any) {

    cLog.prototype.initialize = () => {
        if(!isProduction) {
            isProduction = true;
        }
    };

    cLog.prototype.isInitialized = () => {
        return isProduction;
    }

    if(isProduction) {
        var prefix:string = '';
        var format:string = '';
    
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

            if(expectedbehavior == null) {
                console.error('%c ' + prefix + message, format);
            } else {
                console.error('%c ' + prefix + message + ' → (' + expectedbehavior + ')', format);
            }
            return;
    
            case 'sucess':
            case 'suc':
            case 'su':
            case 's':
                prefix = '✓ Sucess: ';
                format = 'font-size: 17px; color: #66DE93;'
            break;
    
            default:
                prefix = 'ℹ Info: ';
                format = 'font-size: 17px;color: #185ADB;';
              break;
          }
    
        if(expectedbehavior == null) {
            console.log('%c ' + prefix + message, format);
        } else {
            console.log('%c ' + prefix + message + ' → (' + expectedbehavior + ')', format);
        }
    }
}
