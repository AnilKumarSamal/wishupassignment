module.exports = {
  convertDateToYYYYMMDD(date) {
    return new Date(date).toJSON().slice(0, 10);
  },
};
