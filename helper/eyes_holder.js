import Eyes from '@applitools/eyes-testcafe';

class EyesHolder {
  constructor() {
    // initialise the eyes SDK
    this.eyes = new Eyes();
  }

  async validateWindow(t, params, browserCombo) {
    await this.eyes.open({
      browser: browserCombo,
      testName: params.testName,
      t,
    });
    await this.eyes.checkWindow({
      tag: params.tag,
      target: 'window',
    });
  }

  async validateRegion(t, params, browserCombo) {
    await this.eyes.open({
      browser: browserCombo,
      testName: params.testName,
      t,
    });
    await this.eyes.checkWindow({
      target: 'region',
      selector: params.selector,
      tag: params.tag,
    });
  }

  async waitForTestResults() {
    await this.eyes.waitForResults();
  }

  async closeEyes() {
    await this.eyes.close();
  }
}

export default new EyesHolder();
