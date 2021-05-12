let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Sizwe correctly', function(){
        assert.equal('Hello, Sizwe', greet('Sizwe'));
    });
    it('should greet Rennay correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Renay', greet('Rennay'));
    });
});