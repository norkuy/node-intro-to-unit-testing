const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', function() {
    
    it('should return fizz-buzz when arg % 15 === 0', function() {
       
       const normalCases = [15,30,45,75];

       normalCases.forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('fizz-buzz');
       });
    });
    
    it('should return buzz when arg % 5 === 0', function() {
        
        const normalCases = [5,10,40,20];
 
        normalCases.forEach(function(input) {
         expect(fizzBuzzer(input)).to.equal('buzz');
        });
     });
    
     it('should return fizz when arg % 3 === 0', function() {
        
        const normalCases = [27,72,108,33];
 
        normalCases.forEach(function(input) {
         expect(fizzBuzzer(input)).to.equal('fizz');
        });
     });

     it('should throw an error when arg is non-number', function() {
        
        const badInputs = ['h',undefined,null,{a: 100}];
 
        badInputs.forEach(function(input) {
         expect(function() {fizzBuzzer(input)}).to.throw(Error);
        });
     });

});