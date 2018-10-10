const fetch = require('node-fetch');
const cheerio = require('cheerio');

const { log } = console;

const run = async () => {
  const res = await fetch('https://docs.newrelic.com');
  const body = await res.text();
  const $ = cheerio.load(body);
  // Let's echo out the title tag.
  const title = $('title').text();
  log(title);
};

// Run this bad boy!
run().catch(e => setImmediate(() => { throw e; }));
