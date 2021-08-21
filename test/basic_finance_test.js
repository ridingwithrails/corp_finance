var { basic_finance } = require('../src/index');
var chai = require('chai')
var expect = chai.expect;
describe('Annuity: Takes Investment time and discount rate', function () {
    it('Returns Present Value', function () {
        expect(basic_finance.annuity(1_000_000, 10, .10)).to.eq("$162,745.39")
    });
});