let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('Test my totalPhoneBill function' , function() {

    it('that takes in a string calls made and "sms,s" sent. Calculate the total bill for the data provided. there are 2 calls and 3 sms,s"). it should return "R2.75" for calls("l") ' , function() {
        
        assert.deepEqual(totalPhoneBill('l'), "R2.75");
    });
    it('that takes in a string calls made and "sms,s" sent. Calculate the total bill for the data provided. there are 2 calls and 3 sms,s"). it should return "R0.65" for smss("m") ' , function(){
        
        assert.deepEqual(totalPhoneBill('m'), "R0.65");
    });
  
});