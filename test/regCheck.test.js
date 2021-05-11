let assert = require("assert");
let regCheck = require("../regCheck");


describe('Test my regCheck function', function () {
    it('that can check if a registration number is for "GP, L, EC, MP" registration plates. It returns true registration number is from "GP, L, EC, MP" and false if otherwiae. It should return "true" for this example. ', function () {

        assert.deepEqual(regCheck('DV 23 NB GP', 'GP'), true);

    });

    it('that can check if a registration number is for "GP, L, EC, MP" registration plates. It should return "false" for this example ' , function () {
        assert.deepEqual(regCheck('DV 23 LP GP', 'MP'), false);


    });

    it('that can check if a registration number is for "GP, L, EC, MP" registration plates. It should return "false" for this example ' , function () {
        assert.deepEqual(regCheck('CY 189-012', 'CY'), false);


    });

});