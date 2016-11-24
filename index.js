var $ = require('check-typeof');

/**
 * print a number with commas as thousands separators and decimal format
 * @param   {Number}   number                   parameter to change the format
 * @param   {Number}   decimals                 decimal limit
 * @param   {string}   decimalSeparator         decimal seperator format
 * @param   {string}   numberSeparator          thousands seperator format
 * @returns {string}                            return a number with seperators
 */
module.exports.format = function (number, decimals, decimalSeparator, numberSeparator) {

    if ($.isNumber(number)) {

        var num = !isFinite(+number) ? 0 : +number,
            decimalLimit = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            separator = ($.isUndefined(numberSeparator)) ? ',' : numberSeparator,
            decimalChar = ($.isUndefined(decimalSeparator)) ? '.' : decimalSeparator,
            toFixedNumber = function(num, decimalLimit) {
                var roundNum = Math.pow(10, decimalLimit);
                return Math.round(num * roundNum) / roundNum;
            },
            str = (decimalLimit ? toFixedNumber(num, decimalLimit) : Math.round(num)).toString().split('.');

        if (str[0].length > 3) {
            str[0] = str[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, separator);
        }

        if ((str[1] || '').length < decimalLimit) {

            str[1] = str[1] || '';
            str[1] += new Array(decimalLimit - str[1].length + 1).join('0');
        }

        return str.join(decimalChar);

    } else {
        return new Error('Wrong Format!');
    }
}

