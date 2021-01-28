const query = require('./api');

const getValue = () => {
  const sql = 'SELECT * from websites';
  return query(sql);
};

const setValue = ({ name = 'xingen', country = 'china', url = 'wwww' }) => {
  const sql = 'INSERT INTO websites(name,country,url) VALUES(?,?,?)';
  return query(sql, [name, country, url]);
};

const deleteValue = (params) => {
  const sql = `DELETE from websites where id = ${params.id}`;
  return query(sql);
};

const updateValue = ({ name }) => {
  const sql = `UPDATE websites SET url = ? where id = 5`;
  return query(sql, [name]);
};
module.exports = {
  getValue,
  setValue,
  deleteValue,
  updateValue,
};
