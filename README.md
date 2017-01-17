# Web Safe Fonts
List of Web Safe Fonts from www.cssfontstack.com

## Installation
`npm i web-safe-fonts`

## Usage
```js
var webSafeFonts = require('web-safe-fonts');

console.log(webSafeFonts());        // print list of all web safe fonts

console.log(webSafeFonts('serif')); // print list of 'serif' web safe fonts
                                    // available types: 'sans-serif', 'serif', 'monospaced', 'fantasy', 'script'
```
Output example:
```js
[
  {
    family: 'Arial',
    generic: [ 'Helvetica Neue', 'Helvetica', 'sans-serif' ],
    type: 'sans-serif',
    share: { 
      mac: 98.74, 
      win: 99.84 
    }
  },
  ...
]
```

