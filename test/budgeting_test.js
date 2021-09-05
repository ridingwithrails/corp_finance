const helpers = require('../src/helpers')
const format = helpers.formatter.format
const rate_format = helpers.percentage_format


var { budgeting } = require('../src/index');
var chai = require('chai')
var expect = chai.expect;
describe('Budgeting:', function () {
    it('Takes Cash flows and returns IRR', function () {
        result = rate_format(budgeting.irr([-1_000, 100, 1000]))
        expect(result).to.eq("5.13 %")
    });
});