const axios = require('axios')
const http = require('http')


// 一个接口
axios.get('https://api.apiopen.top/getJoke',{
    params:{
        page:1,
        type:'video'
    }
}).then(response=>{
    console.log(response.data)
}).catch(err=>console.log(err))