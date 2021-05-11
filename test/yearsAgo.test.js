let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('Test my yearsAgo function' , function() {

    it('that takes in a year and return how many years ago that year is from the current year..i.e "2011=10" ' , function(){
        
        assert.deepEqual(yearsAgo('2011'), 10);

    });

    it('that takes in a year and return how many years ago that year is from the current year.. i.e "2015=6" ' , function(){
        
        assert.deepEqual(yearsAgo('2015'), 6);

    });

});