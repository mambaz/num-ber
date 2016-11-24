# num-ber

Npm package to print a number with commas as thousands separators and decimal format

## Installation

Installation is easiest through npm:

`npm install num-ber --save`

## Usage

```js


var n = require('num-ber');

// n.format(number, optional1, optional2, optional3);
// optional1 => decimal limit by default zero(0)
// optional2 => decimal separator (comma or dot) by default dot (.)
// optional2 => thousands separator (comma or dot) by default comma (,)

// Number format
var result = n.format(number);
// 100
// 1,000
// 10,000
// 1,234,567
// 424,335,346
// 98,792,635,546
// 37,584,375

// Number format with decimal
var result = n.format(number, 2);
// 100.00
// 1,000.00
// 10,000.00
// 1,234,567.00
// 424,335,345.57
// 98,792,635,545.60
// 37,584,375.48

// Number format with decimal(comma) and seperator (dot)
var result = n.format(number, 2 , ',' , '.');
// 100,00
// 1.000,00
// 10.000,00
// 1.234.567,00
// 424.335.345,57
// 98.792.635.545,60
// 37.584.375,48

// Number format with decimal(dot) and seperator (comma)
var result = n.format(number, 2 , '.' , ',');
// 100.00
// 1,000.00
// 10,000.00
// 1,234,567.00
// 424,335,345.57
// 98,792,635,545.60
// 37,584,375.48

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
// 100
// 1,000
// 10,000
// 100,000
// 1,000,000
// 10,000,000
// 100,000,000
// 1,000,000,000
// 10,000,000,000
// 100,000,000,000
// 1,000.13
// [Error: Wrong Format!]
// [Error: Wrong Format!]


```

