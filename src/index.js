const TABLE_ID = require("./constants").TABLE_ID;
const ERR_TYPE = require("./constants").ERR_TYPE;
const openDateTimeStamp = require("./function").openDateTimeStamp;

async function getOpenedLottery() {
  let lotteryTable = new BaaS.TableObject(TABLE_ID.LOTTERY);
  let query = new BaaS.Query();
  // 处于开奖的状态
  query.compare("status", "=", 2);
  return lotteryTable.setQuery(query).find();
}

exports.main = async function checkLotteryStatus(event, callback) {
  console.log(`checkLotteryStatus - event: ${event}`);
  console.log(openDateTimeStamp());
  try {
    // 获取
    let ret = await getOpenedLottery();
    let openedLotteries = ret.data.objects;
    console.log(`openedLotteries: ${JSON.stringify(openedLotteries)}`);
    if (openedLotteries) {
      callback(null, "success");
    } else {
      callback(ERR_TYPE.GET_LOTTERY_FAILED);
    }
  } catch (e) {
    callback(e);
  }
};
