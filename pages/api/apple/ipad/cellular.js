import * as cheerio from "cheerio";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch("https://www.gsmarena.com/results.php3?mode=tablet&sMakers=48&sSIMTypes=1,2,3");
      const body = await response.text();

      const $ = cheerio.load(body);
      const items = [];

      $(".makers > ul > li > a").map((i, el) => {
        const name = $(el).find("strong").text().replace("Apple", "")
        items.push(name);
      });

      res.json(items);
    } catch (error) {
      console.log(error);
    }
  }
}
