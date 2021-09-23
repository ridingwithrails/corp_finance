const helpers = require('./helpers')

module.exports = {
    irr: (cashFlows) => {
        const precision = 0.00001
        const maxIteration = 10_0000
        const irr_min = 0.001
        const irr_max = 10
        let irr = irr_min
        let value = 0
        let investment = 0


        if (cashFlows[0] < 0) {
            investment = cashFlows[0]
            cashFlows = cashFlows.slice(1)
        }

        for (let i = 0; i < maxIteration; i++) {
            value = helpers.npv(irr, investment, cashFlows)
            if (value < precision) {
                break
            } else if (irr >= irr_max) {
                break
            } else {
                irr = irr + 0.00001
                continue
            }
        }
        return irr
    },
    profitabality_index: (npv, c0) => {
        if (c0 == 0) {
            return 0
        } else {
            return (npv / c0)
        }
    }
}


