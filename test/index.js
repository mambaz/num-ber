'use strict';

var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    n = require('../index.js'),
    numbers = [
        100,
        1000,
        10000,
        1234567,
        424335345.5678,
        98792635545.60,
        37584375.48476
    ];



describe('##### Number with comma and decimal #####', function() {

    it ('Number format', function () {

        numbers.forEach (function (number) {

            var result = n.format(number);
            result.should.be.a('string');
        });
    });

   

});
