/**
 * Created by rengar on 2020/11/03.
 */
const inquirer = require('inquirer');
const logUtil = require('../../../utils/log');
const Ejs = require('../../../utils/ejs');

async function canledar() {
  logUtil.log('start elfincmd pc canledar');

  const { description, startAt, endAt } = await inquirer.prompt([
    {
      name: 'description',
      type: 'input',
      message: '请输入描述信息:',
    },
    {
      type: 'datetime',
      name: 'startAt',
      message: '请输入起始时间:',
      format: ['yy', '/', 'mm', '/', 'dd', '/', ' ', 'hh', ':', 'MM'],
      time: {
        minutes: {
          interval: 15,
        },
      },
    },
    {
      type: 'datetime',
      name: 'endAt',
      message: '请输入截止时间:',
      format: ['yy', '/', 'mm', '/', 'dd', '/', ' ', 'hh', ':', 'MM'],
      time: {
        minutes: {
          interval: 15,
        },
      },
    },
  ]);

  // 创建ICS文件
  const ejs = new Ejs();
  ejs.renderICS({
    description,
    dtStamp: formatDate(null),
    dtStart: formatDate(startAt),
    dtEnd: formatDate(endAt),
  });

  logUtil.log('end elfincmd pc canledar');
};

module.exports = canledar;

// DTSTAMP
const pad = n => n < 10 ? `0${n}` : `${n}`

function formatDate(date) {
  const outDate = date || new Date(new Date().setUTCSeconds(0, 0));

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
