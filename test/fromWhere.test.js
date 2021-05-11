let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('Test my fromWhere function', function () {

    it('that takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville, CJ return Paarl, CA return Cape Town otherwise return Some other place!). Should return "Bellvile" for this example ', function () {

        assert.deepEqual(fromWhere('CY'), "Bellville");
    });
    it('that takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!). Should return "Cape Town" for this example ', function () {

        assert.deepEqual(fromWhere('CA'), "Cape Town");
    });

    it('that takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!). Should return "Paarl" for this example ', function () {

        assert.deepEqual(fromWhere('CJ'), "Paarl");
    });
    it('that takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!). Should return "Some other place!" for this example ', function () {

        assert.deepEqual(fromWhere('GP'), "Some other place!");
    });


});