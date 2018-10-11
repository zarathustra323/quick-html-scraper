# Quick HTML Scraper
A **very** simple example that uses `fetch` and `cheerio` to retrive and parse the HTML body from a remote website.

## Installation
_Requirements:_ you must have at least __NodeJS 7+__ (due to `async/await` functions) and __Yarn__.

1. Clone this repo
2. Within the project root, run `yarn install`
3. Then run `yarn start`

The console will then output:
- The `<title>` element's inner text content
- Each `<a>` element's `href` attribute and inner text content

## Further Reading
- Cheerio Docs: https://cheerio.js.org/
- Fetch Docs: https://github.com/bitinn/node-fetch
