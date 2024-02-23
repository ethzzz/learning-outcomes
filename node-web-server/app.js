const express = require('express')
const port = 3000
const { waterfall } = require('async')

function init_app() {
    const server = express()

    waterfall([
        cb => {
            const redis = require('./utils/redis')
            cb()
        }
    ], function (err) {
        if (err) {
            console.log(err)
        } else {
            server.listen(port, function () {
                console.log('server is running ' + port)
            })
        }
    })
}

init_app()