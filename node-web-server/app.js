const express = require('express')
const port = 3000
const rds = require('./utils/redis')

function init_app() {
    const server = express()

    server.get("/", (req, res) => {
        return res.send("server is running 3000")
    })

    server.listen(port, function () {
        console.log('server is running ' + port)
    })
}

init_app()