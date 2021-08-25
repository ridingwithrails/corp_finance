const helpers = require('../src/helpers')
const format = helpers.formatter.format
const rate_format = helpers.percentage_format


var { basic_finance } = require('../src/index');
var chai = require('chai')
var expect = chai.expect;

describe('Currency format', () => {
    it('takes a number and returns a formatted string', () => {
        expect(format(3.3333)).to.eq('$3.33')
    })
})

describe('Rate format', () => {
    it('takes a number and returns a percentage', () => {
        expect(rate_format(0.033333)).to.eq('3.33 %')
    })
})