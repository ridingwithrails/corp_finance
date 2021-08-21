const helpers = require('../src/helpers')
const format = helpers.formatter.format
const rate_format = helpers.percentage_format


var { basic_finance } = require('../src/index');
var chai = require('chai')
var expect = chai.expect;
describe('Annuity:', function () {
    it('Takes Investment time and discount rate', function () {
        result = format(basic_finance.annuity(1_000_000, 10, .10))
        expect(result).to.eq("$162,745.39")
    });
});

describe('Rate of Return', () => {
    it("Takes investment and final payout", () => {
        result = rate_format(basic_finance.rate_of_return(10_000, 11_000))
        expect(result).to.eq('9.09 %')
    })
})

describe('Future Value, FV', () => {
    it("Takes present value, rate", () => {
        result = basic_finance.future_value(1_000, .10)
        result = format(result)
        expect(result).to.eq('$1,100.00')
    })

})