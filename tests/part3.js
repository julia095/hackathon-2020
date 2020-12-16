import BasePage from '../pages/base_page';
import EyesHolder from '../helper/eyes_holder';

const URL = require('../url.config.json').finalProd;

const browserConfig = [
  { width: 1200, height: 800, name: 'chrome' },
  { width: 1200, height: 800, name: 'firefox' },
  { width: 1200, height: 800, name: 'edgechromium' },
  { width: 1200, height: 800, name: 'safari' },
  { deviceName: 'iPhone X', screenOrientation: 'portrait' },
];

fixture('Holiday Shopping tests')
  .page(URL)
  .afterEach(async () => EyesHolder.closeEyes())
  .after(async () => EyesHolder.waitForTestResults());

test('main page', async (t) => {
  await EyesHolder.validateWindow(
    t,
    {
      testName: 'Test 1',
      tag: 'main page',
    },
    browserConfig,
  );
});

test('filter by color', async (t) => {
  await t.click(BasePage.blackFilter);
  await t.click(BasePage.filterBtn);
  await EyesHolder.validateRegion(
    t,
    {
      testName: 'Test 2',
      tag: 'filter by color',
      selector: BasePage.filteredRgn,
    },
    browserConfig,
  );
});

test('product details', async (t) => {
  await t.click(BasePage.blackShoe);
  await EyesHolder.validateWindow(
    t,
    {
      testName: 'Test 3',
      tag: 'product details',
    },
    browserConfig,
  );
});
