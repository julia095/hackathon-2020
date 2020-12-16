import { Selector } from 'testcafe';

class BasePage {
  constructor() {
    this.blackFilter = Selector('#colors__Black');
    this.blackShoe = Selector('#IMG__imgfluid__215');
    this.filterBtn = Selector('#filterBtn');
    this.filteredRgn = Selector('#product_grid');
  }
}

export default new BasePage();
