var child_process = require('child_process');

function copyDir(src, dist) {
  child_process.spawn('cp', ['-r', src, dist]);	
}

function defaultTask(done) {
  copyDir('./templates', './lib');
  done();
}

exports.default = defaultTask