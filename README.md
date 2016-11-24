# num-ber

Npm package to print a number with commas as thousands separators and decimal format

## Installation

Installation is easiest through npm:

`npm install num-ber --save`

## Usage

```js
    var n = require('num-ber');

    console.log(n.format(100));
    console.log(n.format(1000));
    console.log(n.format(10000));
    console.log(n.format(100000));
    console.log(n.format(1000000));
    console.log(n.format(10000000));
    console.log(n.format(100000000));
    console.log(n.format(1000000000));
    console.log(n.format(10000000000));
    console.log(n.format(100000000000));
    console.log(n.format(1000.1264, 2, '.', ','));
    console.log(n.format(''));
    console.log(n.format('test'));
// result
<!-- 100
1,000
10,000
100,000
1,000,000
10,000,000
100,000,000
1,000,000,000
10,000,000,000
100,000,000,000
1,000.13
[Error: Wrong Format!]
[Error: Wrong Format!] -->
```

