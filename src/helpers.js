const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

const percentage_format = (n) => {
    return (`${(n * 100).toFixed(2)} %`)
}

const npv = (irr, investment, cashFlows) => {
    let returns = 0
    cashFlows.forEach((cf, index) => {
        returns = returns + (cf / Math.pow(1 + irr, index + 1))
    })
    return (investment + returns)
}


module.exports = { formatter, percentage_format, npv };