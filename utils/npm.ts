import shell from 'shelljs';
import whichPM from 'which-pm';

interface FlagInterface {
  dev?: boolean;
}

class Npm {
  getPmType() {
    return new Promise((resolve) => {
      whichPM(process.cwd()).then((pm) => {
        resolve(pm.name);
      }).catch((reject) => {
        reject(new Error('错误的pm类型'));
      });
    });
  }

  async install() {
    let pm = await this.getPmType();
    shell.exec(`${pm} install`);
  }

  async installDependencies(dependencies: string, flag: FlagInterface) {
    let pm = await this.getPmType();
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
