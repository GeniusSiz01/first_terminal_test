let assert = require("assert");
let transportFee = require("../transportFee");


describe('Test my transportFee function' , function() {

    it('It should return the right price based on the shift you are working "morning=R20" as your work provides transport back home. ' , function(){
        
        assert.deepEqual(transportFee('morning'), "R20");
    });

    it('It should return the right price based on the shift you are working "afternoon=R10" as your work provides transport back home. ' , function(){
        
        assert.deepEqual(transportFee('afternoon'), "R10");
    });

    it('It should return the right price based on the shift you are working "nightshift=free" as your work provides transport back home. ' , function(){
        
        assert.deepEqual(transportFee('nightshift'), "free");
    });


});