const puppeteer = require('puppeteer');

async function fetchAndPrintLinks(url) {
    let browser = null;
    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url, { waitUntil: 'networkidle0' });
        console.log("Content loaded. URL: ", url);

        const linksCount = await page.evaluate(() => document.querySelectorAll('a').length);
        console.log("Links found: ", linksCount);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }
}

const url = 'https://www.instagram.com/fit.therapy.official/';
// const url = 'https://www.npmjs.com/package/jsdom';
fetchAndPrintLinks(url);
