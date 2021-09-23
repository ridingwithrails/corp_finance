const helpers = require('./helpers')
const format = helpers.formatter.format
const rate_format = helpers.percentage_format

module.exports = {
    coupon_payment: (coupon_rate, face_value, payments) => {
        if (payments == 0) {
            return 0
        } else {
            return (coupon_rate * face_value) / payments
        }
    },

    bond_price: (params) => {

    },

    strip_yield: (params) => {

    }
}