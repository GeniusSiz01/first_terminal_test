let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('Test my countRegNumber function' , function() {

    it('that if it takes in a string parameter that looks like this "CA 42665, AA 12 RT GP, CA 182736,CY 523519, CJ 812328" and returns the number of registration numbers in the string i.e "4" in this example ' , function(){
        
        assert.deepEqual(countRegNumber('DV 23 NB GP, CA 182736, CY 523519, CJ 812328'), 4);

    });

    it('that if it takes in a string parameter that looks like this "CA 42665, AA 12 RT GP, CA 182736,CY 523519, CJ 812328" and returns the number of registration numbers in the string. i.e "2" in this example' , function(){
        
        assert.deepEqual(countRegNumber('DV 23 NB GP, CJ 812328'), 2);

    });

});