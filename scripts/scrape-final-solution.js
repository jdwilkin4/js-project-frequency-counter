import puppeteer from "puppeteer";
import fs from "fs";

async function scrape(url, fileName) {
  if (!url) {
    throw new Error("URL parameter is missing");
  }

  if (!fileName) {
    throw new Error("fileName parameter is missing");
  }

  const browser = await puppeteer.launch({ dumpio: true });

  const page = await browser.newPage();

  await page.goto(url);

  const jsFileData = await page.evaluate(() => {
    const preTag = document.querySelector("pre");
    let content = preTag ? preTag.textContent : null;

    if (content) {
      const solutionsIndex = content.indexOf("# --solutions--");
      if (solutionsIndex !== -1) {
        content = content.substring(solutionsIndex + "# --solutions--".length);
        // extract only the js solution
        const jsIndex = content.indexOf("```js");

        content =
          jsIndex !== -1 ? content.substring(jsIndex + "```js".length) : null;
      } else {
        content = null;
        throw new Error("Solutions section is not found");
      }
    }

    return content.slice(0, content.lastIndexOf("```")).trim();
  });
  await browser.close();

  fs.writeFileSync(fileName, jsFileData);
  console.log(`Data saved to ${fileName}`);

  return jsFileData;
}

const urlArgument = process.argv[2];
const fileNameArgument = process.argv[3];

if (!urlArgument) {
  console.log(
    "Error: Please provide a URL you wish to scrape as a command-line argument."
  );
  process.exit(1);
}

if (!fileNameArgument) {
  console.log(
    "Error: Please provide a file name you wish to save to as a command-line argument."
  );
  process.exit(1);
}

const url = urlArgument.trim();
await scrape(url, fileNameArgument);
