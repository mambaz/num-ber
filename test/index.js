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



describe('##### Number Format #####', function() {

    it ('Number format without decimal', function () {

        numbers.forEach (function (number) {
            var result = n.format(number);
            console.log(result);
            result.should.be.a('string');
        });
    });

    it ('Number format with decimal', function () {

        numbers.forEach (function (number) {
            var result = n.format(number, 2);
            console.log(result);
            result.should.be.a('string');
        });
    });

    it ('Number format with decimal(comma) and seperator (dot)', function () {

        numbers.forEach (function (number) {
            var result = n.format(number, 2 , ',' , '.');
            console.log(result);
            result.should.be.a('string');
        });
    });

    it ('Number format with decimal(dot) and seperator (comma)', function () {

        numbers.forEach (function (number) {
            var result = n.format(number, 2 , '.' , ',');
            console.log(result);
            result.should.be.a('string');
        });
    });

   

});
