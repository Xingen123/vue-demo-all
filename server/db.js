// const mysql = require("mysql");

// const mysqlConfig = {
//   host: "111.231.9.155",
//   user: "root",
//   port: "3306",
//   password: "xingEN521",
//   database: "RUNOOB"
// };
// const pool = mysql.createPool({
//   host: mysqlConfig.host,
//   user: mysqlConfig.user,
//   password: mysqlConfig.password,
//   database: mysqlConfig.database,
//   port: mysqlConfig.port,
//   multipleStatements: true // 多语句查询
// });

module.exports = {
  mysql: {
    host: '111.231.9.155',
    user: 'root',
    port: '3306',
    password: 'xingEN521',
    database: 'RUNOOB',
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
  },
};

// var setValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = "SELECT * from websites";
//     connection.query(sql, (err, result) => {
//       console.log(result);
//       connection.release();
//     });
//   });
// };

// setValue();
