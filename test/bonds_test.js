const helpers = require('../src/helpers')
const format = helpers.formatter.format
const rate_format = helpers.percentage_format


var { bonds } = require('../src/index');
var chai = require('chai')
var expect = chai.expect;

describe('Coupon Payment', () => {
    it("Takes the Face value, coupon rate and number of payments", () => {
        result = format(bonds.coupon_payment(10, 100, 20))
        expect(result).to.eq("$50.00")

    })
})