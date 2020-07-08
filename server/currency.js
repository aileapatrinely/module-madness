const random_num = require('./randomnumber');
const money_convert = require('./converter');

const disMoney = () => {
  console.log('hi');

  const random = random_num(10, 10000);
  const money = money_convert(random);
  return money;
};

module.exports = disMoney();
