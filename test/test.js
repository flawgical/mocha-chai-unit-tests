const assert = chai.assert
const expect = chai.expect
// describe("pow", function() {

//     it("raises to n-th power", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//   });
describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3 raised to power 3 is 27", function() {
      assert.equal(pow(3, 3), 27);
    });
    it("4 raised to power 3 is 64", function() {
        assert.equal(pow(4, 3), 64)
    })
  
  });

describe("sayHello", function(){
    it("says Hello!", function(){
        assert.equal(sayHello(), "Hello!")
    })
})

describe("addTwoNumbers", function() {
    it("should add two numbers", function(){
        assert.equal(addTwoNumbers(2, 3), 5)
    })
})

describe("addOne", function(){
    it("should add 1 to any number", function(){
        assert.equal(addOne(3), 4)
    })
})

  // checks for a function that takes in x to the power of 3
// describe("pow", function() {

//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} in the power 3 is ${expected}`, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }
  
//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
  
//   });

describe('calculator', function () {
    it('is an object', function () {
      expect(calculator).to.be.a('object')
    })

  })

//   describe('yellPhrase', function() {
//     it('should convert a string to all caps', function() {
//       const aggressiveGreeting = yellPhrase('hey there, friend');
//       assert.equal(aggressiveGreeting, 'HEY THERE, FRIEND');
//     });
//   });
  // or 
//   describe('yellPhrase', function() {
//     it('should convert a string to all caps', function() {
//       assert.equal(yellPhrase('hey there, friend'), 'HEY THERE, FRIEND');
//     });
//   });

describe('yellPhrase', function() {
    it('should convert a string to all caps', function() {
      const aggressiveGreeting = yellPhrase('hey there, friend');
      assert.equal(aggressiveGreeting, 'HEY THERE, FRIEND');
    });
    it('should display a message if given a non-string input', function() {
      const numberInput = yellPhrase(5);
      assert.equal(numberInput, 'Please input a string.');
    });
  });