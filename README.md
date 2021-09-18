# ConsoleLog Debug
So we probably all know and love console.log() right?
And we sometimes (or always) use it instead of an debugger right?

So why not make it enjoyable?

Demo:
![alt](https://i.imgur.com/VoYpTwB.png)

## Here are the Features
- Keep cLog statements in your production code. It will not be printed.
- COLORS and Unicode. What would you want more?
- Different message types: Information (probably the most used one), error and sucess 
- kind of easy to use ↓

## How to use it
### Install
Install ClDebug  `npm install cldebug`.
### Init
As already mentioned your console logs will only be printed in the dev environment. To do this simply call the initClDebug function. 
Example:

```
import { initClDebug } from 'cldebug';

//Example:
if(environment === 'DEV') {
    initClDebug();
}
```

### Usage
First of all import it:
```
import cLog from "cldebug";
```

The cLog function takes 2-3 arguments:

cLog('type', 'message/content', 'expected behavior');

#### Type
Information:

info, inf, if, i

Logs an information in a beautiful blue.


Error:

error, err, er, e

Logs an error in red.

Success:

sucess, suc, su, s

Green message with checkmark, great for "checkpoints".

#### Message / Content
Self explaining. What you would normally write *console.log*(**HERE**).

### Exected behavior
Optional. Puts the defined expected behavior after the message. 
Example:
```
var number = random.nextInt(10 - 1 + 1) + min;

cLog('i', number, '5');
```

###### This is my first ever npm package, dont judge.

