const axios = require('axios')
const http = require('http')


// axios请求接口
// get请求 方式一
axios.get('https://api.apiopen.top/getJoke?page=2&type=video').then(response => {
    console.log('get请求方式一:', response.data)
}).catch(err => err)

// get请求 方式二
axios.get('https://api.apiopen.top/getJoke', {
    params: {
        page: 1,
        type: 'video'
    }
}).then(response => {
    console.log('get请求方式二:', response.data)
}).catch(err => console.log(err))