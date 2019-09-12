const TABLE_ID = require("./constants").TABLE_ID;
const ERR_TYPE = require("./constants").ERR_TYPE;
const openDateTimeStamp = require("./function").openDateTimeStamp;


exports.main = async function checkLotteryStatus(event, callback) {
  console.log(`checkLotteryStatus - event: ${event}`);
  console.log(openDateTimeStamp());
  try {
    // 获取
    console.log(`openedLotteries: ${JSON.stringify(TABLE_ID)}`);
    callback(null, "success");
  } catch (e) {
    callback(e);
  }
};
