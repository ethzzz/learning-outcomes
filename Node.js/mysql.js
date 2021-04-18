// 引入mysql模块
let mysql = require('mysql')

// 建立一个数据库连接
let connection = mysql.createConnection({
    host: 'localhost',
    dbname: 'test',
    user: 'root',
    password: '123',
    port: '3306'
})

// 连接数据库
connection.connect()

// 执行mysql语句
connection.query('show tables', function (error, result, fields) {
    if (error) throw error
    console.log(result)
})