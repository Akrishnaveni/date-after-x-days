let addDays = require("date-fns/addDays");

function getdateAfterXDays(days) {
  let givenDate = new Date(2020, 7, 22);
  let resultDate = (givenDate, days);
  return `${resultDate.getDate()}-${
    resultDate.getMonth() + 1
  }-${resultDate.getFullYear()}`;
}

module.exports = getdateAfterXDays;
