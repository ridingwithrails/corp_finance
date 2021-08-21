const helpers = require('./helpers')
const format = helpers.formatter.format
const rate_format = helpers.percentage_format

module.exports = {
    rate_of_return: (investment, payout) => {
        const rate = ((payout - investment) / investment)
        return rate_format(rate)
    },

    annuity: (pv, t, r) => {
        let cf = pv * r
        const rate_annuity = 1 - (1 / Math.pow(1 + r, t))
        cf = cf / rate_annuity
        return format(cf)
    },

    future_value: (pv, r) => {
        return (
            pv * (1 + r)
        )
    },

    present_value: (fv, r, t) => {
        return (
            fv / Math.pow((1 + r), t)
        )
    },

    npv: (discount, cash_flows, time, price) => {
        const value = cash_flows.reduce((total, cf) => {
            return (total + cf / Math.pow((1 + discount), time))
        })
        return (-price + value)
    }
}


