import shell from 'shelljs';
import whichPMRuns from 'which-pm-runs';

interface FlagInterface {
  dev?: boolean;
}

class Npm {
  getPmType() {
    const result = whichPMRuns();
    if (result) return result.name;
    throw new Error('错误的pm类型');
  }

  install() {
    let pm = this.getPmType();
    shell.exec(`${pm} install`);
  }

  installDependencies(dependencies: string, flag: FlagInterface) {
    let pm = this.getPmType();
    let flags = '';
    if (pm == 'yarn') {
      if (flag.dev) flags = '--dev';
      shell.exec(`${pm} add ${dependencies} ${flags}`);
    } else {
      if (flag.dev) flags = '--save-dev';
      shell.exec(`${pm} install ${dependencies} ${flags}`);
    }
  }
}

export default new Npm();
