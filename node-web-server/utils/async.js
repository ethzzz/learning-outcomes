const async = require("async")

module.exports = {
    waterfall: async.waterfall,
    eachSeries: async.eachSeries,
}