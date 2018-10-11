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

  // Let's get all <a> tags with `href` attrs.
  // We'll use the Cheerio `each` function to iterate over each
  // anchor and echo the inner text and href value.
  $('a[href]').each(function getLinkInfo(i) {
    // Get the text between the `<a>` tag
    // Exampe: `<a href="http://www.foo.com">TEXT HERE</a> becomes `TEXT HERE`
    const text = $(this).text();

    // Get the `href` attribute value.
    // Example: `<a href="http://google.com">Google</a>` becomes `http://www.google.com`
    const href = $(this).attr('href');

    log(`Link #${i}: ${href} [${text}]`);
  });
};

// Run this bad boy!
run().catch(e => setImmediate(() => { throw e; }));
