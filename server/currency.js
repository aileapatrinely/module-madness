const random_num = require('./randomnumber');
const money_convert = require('./converter');

function dollaBillsYo() {
  const the_number = random_num(10, 10000);

  let allmoney = money_convert(the_number);
}
