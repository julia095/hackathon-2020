require('dotenv').config();

module.exports = {
  apiKey: process.env.API,
  batchName: 'Holiday Shopping',
  appName: 'AppliFashion',
  concurrency: 10,
};
