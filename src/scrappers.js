const puppeter = require("puppeteer");

async function scrapBiddata(url) {
  const browser = await puppeter.launch();
  const page = await browser.newPage();
  await page.goto(url);


  //dateofpublication
  const [el] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/span[1]');
  const txt = await el.getProperty('textContent');
  const DatePublication = await txt.jsonValue();

  //object
  const [el2] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/p[1]');
  const txt2 = await el2.getProperty('textContent');
  const Object = await txt2.jsonValue();

  //Bidding Date
  const [el3] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/span[6]');
  const txt3 = await el3.getProperty('textContent');
  const BidDate = await txt3.jsonValue();

  //Additional Information 01
  const [el4] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/p[2]');
  const txt4 = await el4.getProperty('textContent');
  const AdditionalInformation = await txt4.jsonValue();

  //Additional Information 02
  const [el5] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[2]/span/p[3]');
  const txt5 = await el5.getProperty('textContent');
  const AdditionalInformation02 = await txt5.jsonValue();

  //Additional Link to the Bid
  const [el6] = await page.$x('//*[@id="block-views-block-view-noticia-pbh-block-5"]/div/div/div/div/div/div[3]/div/table/tbody/tr/td[2]/div/div/div/a');
  const txt6 = await el6.getProperty('textContent');
  const Link = await txt6.jsonValue();

  console.log({DatePublication, BidDate, Object, AdditionalInformation, AdditionalInformation02, Link});
  browser.close();
}


scrapBiddata(
  "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020"
);

