# applitools-2020
Applitools Holiday Shopping Hackathon

## The Project

Imagine you are an engineer assigned to test a retail application, AppliFashion, before the busy holiday season.
The challenge is to complete three (3) automated tasks.  For each task, use Applitools Eyes as verification tool.

* Automate the tests below against the V1 production version of this application. Set Eyes to run each of the three tests on Chrome (1200 x 800) using Applitools Ultrafast Grid. 
  * Main page - Check the main page of the app by using Applitools Eyes to take a screenshot of the entire page.
  * Filtered Product Grid - On the left side of the main page, check Black under the colors filter and click the Filter button.Use Applitools Eyes’ Check Region feature to only capture a screenshot of the shoes grid (id=product_grid) and verify that only two black shoes appear.
  * Product Details - Without filtering, click on the Appli Air x Night shoe Use Applitools to take a screenshot of the entire page to verify all of the details about the product.
* Run the same tests against the dev-branch version, which contains bugs.  
* Run your tests again in the final production version of the app but first update your configurations to set Eyes to run each of the three tests across the following configurations using Applitools Ultrafast Grid:
  * Chrome (1200 x 800)
  * Firefox (1200 x 800)
  * Edge Chromium (1200 x 800)
  * Safari (1200 x 800)
  * iPhone X

### Tools
* [Testcafe](https://testcafe-discuss.devexpress.com/) (Note: while working on tests implementation, has found a known testcafe issue which was causing Applitools to not capture a screen correctly. Therefore, I had to downgrade to testcafe@1.8.8 until the issue is resolved)
* [Applitools](https://applitools.com/)


## Getting Started

To get a the project up and running follow these steps.

### Prerequisites

- [npm v10.16.3+](https://nodejs.org/en/)
- [Chrome V80+](https://www.google.com/chrome/)

### Installation

1. Clone the repository

```sh
git clone https://github.com/julia095/hackathon-2020.git
```

2. Navigate to the root of the project
```sh
cd hackathon-2020
```
3. Install NPM packages

```sh
npm install
```
4. Create a .env file

```sh
touch .env
echo "API=[API Key]" >> .env

# windows:
# type NUL > .env
# echo API=[API Key]  > .env
```

### How to run tests

Run any of the following test scripts

```sh
# Run all tests (test 1, 2, 3) against production v1 of the app on Chrome (1200 x 800) using Applitools Ultrafast Grid.
npm run test:part1
```


```sh
# Run all tests (test 1, 2, 3) against the dev-branch version of the app on Chrome (1200 x 800) using Applitools Ultrafast Grid.
npm run test:part2
```

```sh
# Run all tests (test 1, 2, 3) against the final production version of the app across the following configurations using Applitools Ultrafast Grid:
# Chrome (1200 x 800), Firefox (1200 x 800), Edge Chromium (1200 x 800), Safari (1200 x 800), iPhone X
npm run test:part3
```
