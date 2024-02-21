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

module.exports = {
    redisClient
}