const {
  createSubscription,
  getSubscriptions,
  getPlanById,
} = require("./subscriptionservice");
const { getEndDate, convertDateToYYYYMMDD } = require("../../utils/utils");
module.exports = {
  createSubscription: (req, res) => {
    const body = req.body;
    getPlanById(body.plan_id, (err, currentplan) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: err.message,
        });
      }
      if (currentplan) {
        var end_date = getEndDate(
          body.start_date,
          parseInt(currentplan.validity)
        );
        body["end_date"] = convertDateToYYYYMMDD(end_date);
        createSubscription(body, (err, result) => {
          if (err) {
            return res.status(500).json({
              success: 0,
              message: err.message,
            });
          }
          if (result) {
            return res.status(200).json({
              status: "SUCCESS",
              amount: `-${currentplan.cost}`,
            });
          }
        });
      }
    });
  },
  getSubscriptions: (req, res) => {
    const username = req.params.username;
    getSubscriptions(username, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!result) {
        return [];
      } else {
        var finalresult = result.map(({ planid, startdate, enddate }) => ({
          plan_id: planid,
          start_date: convertDateToYYYYMMDD(startdate),
          valid_till: convertDateToYYYYMMDD(enddate),
        }));
        return res.json({
          finalresult,
        });
      }
    });
  },
};
