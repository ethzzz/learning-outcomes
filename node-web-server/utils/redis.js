const redis = require('ioredis')

const redisConfig = {
    port: 6379,
    host: '159.75.146.88',
    password: 'ethzredis'
}

const redisClient = new redis(redisConfig)

redisClient.on('connect', () => {
    console.log('redis is connected')
})

redisClient.on('error', (err) => {
    console.log(err)
})

redisClient.on('ready', () => {
    console.log('redis is ready')
})

module.exports = {
    redisClient
}