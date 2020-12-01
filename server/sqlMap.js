const query = require("./api");

const getValue = () => {
  let sql = "SELECT * from websites";
  return query(sql);
};

const setValue = () => {
  let sql = "INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)";
  return query(sql);
};

module.exports = {
  getValue,
  setValue
};
