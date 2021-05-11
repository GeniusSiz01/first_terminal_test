let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('Test my isWeekday function' , function() {

    it('that takes a string parameter - to find out if the parameter passed in, is a day of the week (ie. Mon-Fri)." it should return false for Saturday and Sunday ' , function(){
        
        assert.deepEqual(isWeekday('Saturday'), false);

    });

    it('that takes a string parameter - to find out if the parameter passed in is a day of the week (ie. Mon-Fri)." it should return true for Mon-fri' , function(){
        
        assert.deepEqual(isWeekday('Monday'), true);

    });

});