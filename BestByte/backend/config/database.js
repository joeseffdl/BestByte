import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ej042101',
  database: 'bestbyte_db'
});
 
export default db;


