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
        }
    ]);
    
    // 创建ICS文件
    const ejs = new Ejs();
    ejs.renderICS({
        description,
    });

    logUtil.log('end elfincmd pc canledar description', description);
    logUtil.log('end elfincmd pc canledar timeStamp', timeStamp);
};

module.exports = canledar;

// DTSTAMP
const pad = n => n < 10 ? `0${n}` : `${n}`

function formatDate(args = [], outputType = 'utc', inputType = 'local') {
  if (Array.isArray(args) && args.length === 3) {
    const [year, month, date] = args
    return `${year}${pad(month)}${pad(date)}`
  }

  let outDate = new Date(new Date().setUTCSeconds(0, 0))
  if (Array.isArray(args) && args.length > 0 && args[0]) {
    const [year, month, date, hours = 0, minutes = 0, seconds = 0] = args
    if (inputType === 'local') {
      outDate = new Date(year, month - 1, date, hours, minutes, seconds)
    } else {
      outDate = new Date(Date.UTC(year, month - 1, date, hours, minutes, seconds))
    }
  }

  if (outputType === 'local') {
    return [
      outDate.getFullYear(),
      pad(outDate.getMonth() + 1),
      pad(outDate.getDate()),
      'T',
      pad(outDate.getHours()),
      pad(outDate.getMinutes()),
      pad(outDate.getSeconds())
    ].join('')
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
  ].join('')
}
