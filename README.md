# num-ber

A Node.js package for formatting numbers with thousands separators and decimal formatting. Provides a versatile `format` function that allows customization of decimal limits, decimal separators, and thousands separators for precise number formatting.

## Installation

```bash
npm install num-ber
```

## Usage

```javascript
const num = require('num-ber');

// Basic usage
num.format(1234567);                           // '1,234,567'
num.format(1234567.5, 2);                      // '1,234,567.50'
num.format(1234567.5, 2, '.', ',');            // '1.234.567,50'
```

## API

### `format(number, [decimals], [decimalSeparator], [numberSeparator], [fallback])`

Formats a number with custom separators and decimal places.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `number` | number | required | The number to format |
| `decimals` | number | `0` | Number of decimal places to display |
| `decimalSeparator` | string | `'.'` | Character used to separate decimals (e.g., '.' or ',') |
| `numberSeparator` | string | `','` | Character used to separate thousands (e.g., ',' or '.') |
| `fallback` | any | `null` | Value to return if input is invalid instead of throwing an error |

#### Returns

- **string**: Formatted number
- **Error**: Throws an error if the input is not a number and no fallback is provided

## Examples

### Default Format
```javascript
num.format(1234567);                           // '1,234,567'
num.format(0);                                 // '0'
num.format(0.0001, 0);                         // '0'
```

### With Decimal Places
```javascript
num.format(1234567.5, 2);                      // '1,234,567.50'
num.format(0, 2);                              // '0.00'
num.format(1234567.828, 2);                    // '1,234,567.83'
```

### European Format (comma as thousands, dot as decimal)
```javascript
num.format(1234.5678, 2, '.', ',');            // '1.234,57'
num.format(9876543, 0, '.', '');               // '9876543'
```

### With Custom Separators
```javascript
// No separators
num.format(9876.54321, 3, '', '');             // '9876.543'

// Custom separators
num.format(1000000, 0, '.', ' ');              // '1 000 000'
```

### Negative Numbers
```javascript
num.format(-1234567.5, 2);                     // '-1,234,567.50'
num.format(-9876.54, 0);                       // '-9,877'
```

### Very Large Numbers
```javascript
num.format(999999999999.99, 2);                // '999,999,999,999.99'
```

### Negative Decimal Places
```javascript
num.format(1234.5678, -2);                     // '1,234.57'
```

### Error Handling with Fallback
```javascript
num.format('not a number', 2, ',', '.', 'Fallback');  // 'Fallback'
num.format('invalid', 2, ',', '.', 0);                // 0
```

### Error Handling without Fallback
```javascript
try {
  num.format('invalid input');
} catch (error) {
  console.error(error.message);                // 'Invalid input: Not a number'
}
```

## Features

- ✅ Format numbers with custom thousands separators
- ✅ Format decimal places with custom separators
- ✅ Support for negative numbers
- ✅ Support for very large numbers
- ✅ Fallback value for invalid inputs
- ✅ Rounding to specified decimal places
- ✅ No external dependencies

## Testing

Run the test suite:

```bash
npm test
```
