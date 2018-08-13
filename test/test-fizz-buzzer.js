// import chai, declare expect variable
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function (input) {

    // test the normal case
    it('Check for normal fizz buzz game', function () {

        // check for result match 



        /* it('should return FizzBuzz if is divisible by 3 and 5', function () {
             assert.equal('FizzBuzz', fizzBuzzer(15));
         });
         it('should return Fizz if is divisible by 3', function () {
             assert.equal('Fizz', fizzBuzzer(3));
         });
         it('should return Buzz if is divisible by 5', function () {
             assert.equal('Buzz', fizzBuzzer(5));
         });
 
         // check for non numeric input 
         it('should raise error if args not numbers', function () {
             // range of bad inputs where not both are numbers
             assert.equal('string', fizzBuzz(0));
         });
 
         it('should raise error if args not numbers', function () {
             // range of bad inputs where not both are numbers
             assert.equal('undefined', fizzBuzz(0));
         });
 
 */

        const normalCase = [
            { word: "fizz-buzz", expected: 15 },
            { word: "fizz", expected: 3 },
            { word: "buzz", expected: 5 }
        ]
        normalCase.forEach(function (input) {
            const answer = fizzBuzzer(input.expected);
            expect(answer).to.equal(input.word)
        });


    });

    it('should raise error if args not numbers', function() {
        // range of bad inputs where not both are numbers
        const badInputs = [ 'string', undefined];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input);
          }).to.throw(Error);

        });

}) 
})