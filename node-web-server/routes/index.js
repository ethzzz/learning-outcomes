const axios = require('axios')
const fs = require("fs")
const allRouter = function () {
    const files = fs.readdirSync(__dirname + "\\modules")
    const routerModules = []
    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file === 'index.js') {
            continue
        } else {
            const router = require('./modules/' + file)
            routerModules.push(router)
        }
    }
    return routerModules
}

const routerModules = allRouter()

module.exports = routerModules

