# num-ber

`num-ber` is a Node.js package that formats numbers with commas as thousands separators and allows decimal formatting. It provides a flexible `format` function enabling customization of decimal limits, decimal separators, and thousands separators for precise number formatting.

## Installation

You can install `num-ber` via npm:

```bash
npm install num-ber --save
```

## Usage

```js


const n = require('num-ber');

/**
 * Formats a number with commas as thousands separators and decimal format
 * @param   {number}   number                   The number to format
 * @param   {number}   decimals                 Decimal limit
 * @param   {string}   decimalSeparator         Decimal separator format
 * @param   {string}   numberSeparator          Thousands separator format
 * @param   {string}   fallback                 Fallback value if the input is invalid (optional)
 * @returns {string|Error}                      Returns a formatted number with separators or an Error object
 */

// Format a number without specifying decimal and separators
console.log(n.format(100)); // Output: '100'
console.log(n.format(1000)); // Output: '1,000'
console.log(n.format(10000)); // Output: '10,000'

// Format a number with specified decimal places and separators
console.log(n.format(1000.1264, 2, '.', ',')); // Output: '1,000.13'
console.log(n.format(9876543210, 0, '.', ',')); // Output: '9,876,543,210'

// Error handling for invalid inputs
console.log(n.format('')); // Output: [Error: Invalid input: Not a number]
console.log(n.format('test')); // Output: [Error: Invalid input: Not a number]



```

