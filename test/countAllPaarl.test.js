let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('Test my countAllPaarl function', function () {

    it('that takes a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl ("CJ") i.e "3" in this example ', function () {

        assert.deepEqual(countAllPaarl('CJ 812328, CJ 523519, CA 182736, CJ 475199, CY 298365 '), 3);
    });

    it('that takes a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl ("CJ") i.e "1" in this example', function () {

        assert.deepEqual(countAllPaarl('CA 182736, CJ 475199, CY 298365 '), 1);
    });
});