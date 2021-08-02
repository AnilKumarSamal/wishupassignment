const pool = require("../../config/database");

module.exports = {
  getSubscriptions: (username, callBack) => {
    pool.query(
      `select * from subscription where username =  ?`,
      [username],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  getSubscriptionById: (id, callBack) => {
    pool.query(
      `select * from subscription where id =  ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result[0]);
      }
    );
  },
  getPlanById: (id, callBack) => {
    pool.query(
      `select * from plans where planid =  ?`,
      [id],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result[0]);
      }
    );
  },
  createSubscription: (data, callBack) => {
    pool.query(
      `insert into subscription (username,planid,startdate,endDate) values (?,?,?,?)`,
      [data.user_name, data.plan_id, data.start_date, data.end_date],
      (error, result) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
