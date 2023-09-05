// import express from "express";
import conn from "../configs/connectDB";
// const app = express();
let getHomePage = (req, res) => {
    //logic
    let data = [];
    // app.get('/', function (req, res) {
    let sql = 'SELECT * FROM employee';
    conn.query(sql, function (err, results, fields) {

        data = JSON.stringify(results);
        return res.render("index.ejs", { dataUser: data })
    });
    // conn.query(sql, function (err, results, fields) {
    //     res.render('index.ejs', {
    //         data: JSON.stringify(results)
    //     })
    // console.log('check', JSON.stringify(data));
    // });


}

let getHomePage1 = (req, res) => {
    //logic
    // res.render("index.ejs");
    return res.render('test.ejs')
}

module.exports = {
    getHomePage,
    getHomePage1
}