let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");



describe('Test my countAllFromTown function', function () {

    it('that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town It should return "3" for the following example. ', function () {

        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'), 1);
    });

    it('that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town It should return "2" for this example. ', function () {

        assert.deepEqual(countAllFromTown('CY 567,CL 345, CJ 456,CJ 341'), 2);
    });

    it('that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return number registration numbers in the string that is for that town It should return "0" for this example. ', function () {

        assert.deepEqual(countAllFromTown('CY 567,CY 345, CL 456,CL 341'), 0);
    });
});