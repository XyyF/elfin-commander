/**
 * Created by rengar on 2020/11/03.
 */
const inquirer = require('inquirer');
const logUtil = require('../../../utils/log');
const Ejs = require('../../../utils/ejs');

async function canledar() {
  logUtil.log('start elfincmd pc canledar');

  const { description, timeStamp } = await inquirer.prompt([
    {
      name: 'description',
      type: 'input',
      message: '请输入描述信息:',
    },
    {
      name: 'timeStamp',
      type: 'input',
      message: '请输入起始/截止时间(2020.11.12.9.15-2020.11.12.10):',
      default: '2020.11.12.9.15-2020.11.12.10',
      validate(input) {
        var done = this.async();
        // 2020.11.9-...
        // 2020.1.12-...
        // 2020.11.12-...
        // 2020.11.12.9-...
        // 2020.11.12.9.12-...
        if (!/^\d{4}(\.\d{1,2}){2,4}-\d{4}(\.\d{1,2}){2,4}$/g.test(input)) {
          return done('日期格式错误，请重新数据');
        }
        done(null, true);
      },
    }
  ]);
  const startAt = timeStamp.split('-')[0];
  const endAt = timeStamp.split('-')[1];

  // 创建ICS文件
  const ejs = new Ejs();
  ejs.renderICS({
    description,
    dtStamp: formatDate(null),
    dtStart: formatDate(startAt.split('.')),
    dtEnd: formatDate(endAt.split('.')),
  });

  logUtil.log('end elfincmd pc canledar');
};

module.exports = canledar;

// DTSTAMP
const pad = n => n < 10 ? `0${n}` : `${n}`

function formatDate(args = []) {
  let outDate = new Date(new Date().setUTCSeconds(0, 0));
  if (Array.isArray(args) && args.length > 0 && args[0]) {
    const [year, month, date, hours = 0, minutes = 0, seconds = 0] = args;
    outDate = new Date(Date.UTC(year, month - 1, date, hours - 8, minutes, seconds));
  }

  return [
    outDate.getUTCFullYear(),
    pad(outDate.getUTCMonth() + 1),
    pad(outDate.getUTCDate()),
    'T',
    pad(outDate.getUTCHours()),
    pad(outDate.getUTCMinutes()),
    pad(outDate.getUTCSeconds()),
    'Z'
  ].join('');
}
