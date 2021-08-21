const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

const percentage_format = (n) => {
    return (`${(n * 100).toFixed(2)} %`)
}

module.exports = { formatter, percentage_format };