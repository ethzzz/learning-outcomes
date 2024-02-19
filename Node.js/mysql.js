// 引入mysql模块
let mysql = require('mysql')

// 建立一个数据库连接
let connection = mysql.createConnection({
    host: 'localhost',
    database: 'testdb',
    user: 'root',
    password: '123456',
    port: '3306'
})

// 连接数据库
connection.connect()

connection.query(`update user set password = '122112' where username = 'test'`, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

function exec_sql(sql, callback) {
    connection.query(sql, callback)
}

exec_sql(`select * from user`, (err, res) => {
    console.log(res);
})

module.exports = connection