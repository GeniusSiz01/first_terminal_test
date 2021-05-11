let assert = require("assert");
let isFromBellville = require("../isFromBellville");


describe('Test my isFromBellvile function' , function(){
    it('that returns "true" if a registration number is for Bellville otherwise returns "false". Registration numbers for Bellville starts with "CY". It should return "true" for this example ' , function(){
        assert.equal(true,isFromBellville("CY"));

        /*assert.deepEqual([2,2],[2,2]);*/
    });
    it('that returns "true" if a registration number is for Bellville otherwise returns "false". Registration numbers for Bellville starts with "CY". it should return "false" for this example' , function(){
        assert.equal(false, isFromBellville("CA"));

        /*assert.deepEqual([2,2],[2,2]);*/
    });

});