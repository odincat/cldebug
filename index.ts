export var isClDebugEnabled:boolean = false;

export function initClDebug() {
    if(!isClDebugEnabled) {
        isClDebugEnabled = true;
    }
}

/**
 * Logs something to console.
 */
export default function cLog(type:string, message:any, expectedbehavior?:any) {
    if(isClDebugEnabled) {
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
