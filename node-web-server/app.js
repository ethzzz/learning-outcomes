const express = require('express')
const port = 3000
const allRouter = require(__dirname + '/routes/index')
console.log("allRouter", allRouter);
const { waterfall } = require('async')

function init_app() {
    const server = express()

    waterfall([
        cb => {
            const redis = require('./utils/redis')
            cb()
        },
        cb => {
            server.use("/", allRouter)
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