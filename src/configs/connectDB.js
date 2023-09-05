import mysql from 'mysql';
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo1',
    charset: 'utf8_general_ci'
});

// conn.query(
//     'SELECT * FROM employee',
//     function (err, results, fields) {
//         console.log(results);
//         console.log(fields);
//     }
// )

conn.connect(function (err) {
    if (err) {
        throw err.stack;
    }
    else
        console.log("connect success");
})

export default conn;