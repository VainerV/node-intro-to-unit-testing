// import chai, declare expect variable
const expect = require('chai').expect;


const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function(input) {

    // test the normal case
    it('Check for normal fizz buzz game', function() {

      // range of normal inputs, including
      // notable cases like non numeric input
      

    
        it('should return Fizz if is divisible by 3', function(){
          assert.equal('Fizz', fizzBuzzer(3));
        });
        it('should return Buzz if is divisible by 5', function(){
          assert.equal('Buzz', fizzBuzzer(5));
        });
        it('should return FizzBuzz if is divisible by 3 and 5', function(){
          assert.equal('FizzBuzz', fizzBuzzer(15));
        });
        //it('should return the number if is not divisible by 3 or 5', function(){
        //  assert.equal(4, fizzBuzzer(4));
        
  
    it('should raise error if args not numbers', function() {
      // range of bad inputs where not both are numbers
      assert.equal('string', fizzBuzz(0));
      });

      it('should raise error if args not numbers', function() {
        // range of bad inputs where not both are numbers
        assert.equal('undefined', fizzBuzz(0));
        });
  



    });
})