const mysql = require('mysql');
const dbConfig = require('./db');
const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true, // 多语句查询
});
/**
 * 使用时传入对应参数，sql为相应sql语句，parmes为sql参数（替换占位符?）
 * @param {String} sql
 * @param {Array} parmes
 */
const query = (sql, parmes = []) => {
  // 使用Promise解决mysql的命令处理异步问题
  return new Promise((resolve, reject) => {
    // 在数据池中进行操作
    pool.query(sql, parmes, function(error, results) {
      if (error) {
        reject(error.message);
      } else {
        resolve(results);
      }
    });
  });
};
module.exports = query;
