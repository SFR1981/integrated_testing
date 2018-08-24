var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 1 to 4 and get 5', function(){
    calculator.previousTotal=4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5 );
  })

  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })
  //
  //
  // Unit Tests:
  //

  // - `calculator.subtract()` subtract 4 from 7 and get 3
  // - `calculator.multiply()` - multiply 3 by 5 and get 15
  // - `calculator.divide()` - divide 21 by 7 and get 3


});
