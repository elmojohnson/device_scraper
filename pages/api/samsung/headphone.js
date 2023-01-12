import * as cheerio from "cheerio";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch("https://www.gsmarena.com/results.php3?nYearMin=2017&chk35mm=selected&sMakers=9");
      const body = await response.text();

      const $ = cheerio.load(body);
      const items = [];

      $(".makers > ul > li > a").map((i, el) => {
        const name = $(el).find("strong").text().replace("Samsung", "")
        items.push(name);
      });

      res.json(items);
    } catch (error) {
      console.log(error);
    }
  }
}
