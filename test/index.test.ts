import assert = require('assert')
import * as Splitly from '../src'


test('chooseVariant', () => {
  assert.equal(Splitly.chooseVariant('hello', '2', ['no', 'yes']), 'no')
  assert.equal(Splitly.chooseVariant('hello_a', '1', ['no', 'yes']), 'yes')
  assert.equal(Splitly.chooseVariant('hello', '2', ['no', 'yes']), 'no')
  assert.equal(Splitly.chooseVariant('hello_b', '2', ['no', 'yes']), 'yes')
  assert.equal(Splitly.chooseVariant('hello', '3', ['no', 'yes']), 'yes')
  assert.equal(Splitly.chooseVariant('hello', '4', ['no', 'yes']), 'no')
  assert.equal(Splitly.chooseVariant('hello', '5', ['no', 'yes']), 'no')

  assert.equal(Splitly.chooseVariant('hello', '1', ['a', 'b', 'c', 'd']), 'b')
  assert.equal(Splitly.chooseVariant('hello', '1', ['a', 'b', 'c', 'd']), 'b')
  assert.equal(Splitly.chooseVariant('hello', '1', ['a', 'b', 'c', 'd']), 'b')

  assert.equal(Splitly.chooseVariant('hello', '3', ['a', 'b', 'c', 'd']), 'd')
  assert.equal(Splitly.chooseVariant('hello', '6', ['a', 'b', 'c', 'd']), 'a')
  assert.equal(Splitly.chooseVariant('hello', '10', ['a', 'b', 'c', 'd']), 'c')
})


test('randomBin', () => {
  assert.equal(Splitly.randomBin('hello1'), 50)
  assert.equal(Splitly.randomBin('hello2'), 88)
  assert.equal(Splitly.randomBin('hello3'), 76)
  assert.equal(Splitly.randomBin('hello4'), 47)
})