const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "rantu",
password: "Ratnesh@8",
database:"test" 
})

module.exports = db;