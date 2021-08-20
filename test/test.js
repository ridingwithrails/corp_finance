var { annuity } = require('../index');
var chai = require('chai')
var expect = chai.expect;
describe('Annuity: Takes Investment time and discount rate', function () {
    it('Returns Present Value', function () {
        expect(annuity(1_000_000, 10, .10)).to.eq("$162,745.39")
    });
});