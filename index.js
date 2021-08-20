const helpers = require('./helpers')
const format = helpers.formatter.format

const rate_of_return = (investment, payout) => {
  const rate = ((payout - investment) / investment) * 100
  return rate
}

const annuity = (pv, t, r) => {
  let cf = pv * r
  const rate_annuity = 1 - (1 / Math.pow(1 + r, t))
  cf = cf / rate_annuity
  return format(cf)
}

console.log(annuity(1_000_000, 10, .10))