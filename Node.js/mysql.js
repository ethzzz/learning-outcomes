// 引入mysql模块
let mysql = require('mysql')
// 引入http模块
let http = require('http')

// 建立一个数据库连接
let connection = mysql.createConnection({
    host: 'localhost',
    database: 'sys',
    user: 'root',
    password: '123456',
    port: '3306'
})

// 建立一个http服务
let httpServer = http.createServer()



// 连接数据库
connection.connect()

// 执行mysql语句
connection.query('show tables', function (error, result, fields) {
    if (error) {
        throw error
    }
    console.log(result)
})