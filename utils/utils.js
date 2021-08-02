module.exports = {
  convertDateToYYYYMMDD(date) {
    return new Date(date).toJSON().slice(0, 10);
  },
  getEndDate(date, days) {
    var start_date = new Date(date);
    var end_date = new Date();
    end_date.setDate(start_date.getDate() + days);
    return end_date;
  },
};
