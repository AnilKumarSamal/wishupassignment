const { insertUser, getUser } = require("./userservice");
const { convertDateToYYYYMMDD } = require("../../utils/utils");
module.exports = {
  createUser: (req, res) => {
    const username = req.params.username;
    insertUser(username, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }
      if (result) {
        console.log(result);
        return res.status(200).json({
          success: 1,
          message: "user created successfully",
        });
      }
    });
  },
  getUser: (req, res) => {
    const username = req.params.username;
    getUser(username, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "user not found",
        });
      } else {
        return res.json({
          user_name: result.username,
          created_at: convertDateToYYYYMMDD(result.createdat),
        });
      }
    });
  },
};
