const pool = require("../../config/database");
const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");

module.exports = {
  getUser: (username, callBack) => {
    pool.query(
      `select * from user where username =  ?`,
      [username],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result[0]);
      }
    );
  },
  insertUser: (username, callBack) => {
    pool.query(
      `insert into user (username,createdat) values (?,?)`,
      [username, timestamp],
      (error, result) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
