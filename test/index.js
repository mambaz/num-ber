"use strict";

var chai = require("chai"),
  should = chai.should(),
  expect = chai.expect,
  n = require("../index.js"),
  numbers = [
    100, 1000, 10000, 1234567, 424335345.5678, 98792635545.6, 37584375.48476,
  ];

describe("##### Number Format #####", function () {
  it("Number format without decimal", function () {
    numbers.forEach(function (number) {
      var result = n.format(number);
      console.log(result);
      result.should.be.a("string");
    });
  });

  it("Number format with decimal", function () {
    numbers.forEach(function (number) {
      var result = n.format(number, 2);
      console.log(result);
      result.should.be.a("string");
    });
  });

  it("Number format with decimal(comma) and separators (dot)", function () {
    numbers.forEach(function (number) {
      var result = n.format(number, 2, ",", ".");
      console.log(result);
      result.should.be.a("string");
    });
  });

  it("Number format with decimal(dot) and separators (comma)", function () {
    numbers.forEach(function (number) {
      var result = n.format(number, 2, ".", ",");
      console.log(result);
      result.should.be.a("string");
    });
  });

  it("should format a number with default separators", () => {
    expect(n.format(1234567)).to.equal("1,234,567");
  });

  it("should format a number with default separators", () => {
    expect(n.format(1234567.828, 2)).to.equal("1,234,567.83");
  });

  it("should format a number with specified decimal and number separators", () => {
    expect(n.format(1234.5678, 2, ",", ".")).to.equal("1.234,57");
  });

  it("should format a number with decimal places without separators", () => {
    var result = n.format(9876.54321, 3, "", "");
    expect(n.format(9876.54321, 3, "", "")).to.equal("9876.543");
  });

  it("should format a number with no decimal places and custom separators", () => {
    expect(n.format(9876543, 0, ".", "")).to.equal("9876543");
  });

  it("should handle invalid inputs with a provided fallback", () => {
    expect(n.format("not a number", 2, ",", ".", "Fallback")).to.equal(
      "Fallback"
    );
  });

  it("should throw an error for invalid input when no fallback is provided", () => {
    expect(() => {
      n.format("invalid input");
    }).to.throw(Error, "Invalid input: Not a number");
  });

  it("should return a default error when no fallback is provided and input is invalid", () => {
    expect(() => {
      n.format("invalid input");
    }).to.throw(Error);
  });
});
