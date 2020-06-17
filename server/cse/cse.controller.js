const got = require('got');
const cheerio = require('cheerio');

exports.topFiveGainers = async (req, res, next) => {
  try {
    const { body: html } = await got('https://www.cse.com.bd/');
    const $ = cheerio.load(html);
    const topGainers = [];
    $('#content_1 #mitabs-1 .MIrow1').each((pos, el) => {
      topGainers.push({
        com: $(el).find('.Col1').text().trim(),
        ltp: $(el).find('.Col2').text().trim(),
        change: $(el).find('.Col3').text().trim(),
        changeP: $(el).find('.Col4').text().trim(),
      });
      if (pos + 1 === 5) return false;
    });
    return res.status(200).json({
      success: true,
      topGainers,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err,
    });
  }
};

exports.topFiveLosers = async (req, res, next) => {
  try {
    const { body: html } = await got('https://www.cse.com.bd/');
    const $ = cheerio.load(html);
    const topLosers = [];
    $('#content_2 #mitabs-1 .MIrow1').each((pos, el) => {
      topLosers.push({
        com: $(el).find('.Col1').text().trim(),
        ltp: $(el).find('.Col2').text().trim(),
        change: $(el).find('.Col3').text().trim(),
        changeP: $(el).find('.Col4').text().trim(),
      });
      if (pos + 1 === 5) return false;
    });
    return res.status(200).json({
      success: true,
      topLosers,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err,
    });
  }
};

exports.topfiveMovers = async (req, res, next) => {
  try {
    const { body: html } = await got('https://www.cse.com.bd/');
    const $ = cheerio.load(html);
    const topMovers = [];
    $('.tabbed_area #mover_content_2 #mitabs-1 .immover_MIrow1').each(
      (pos, el) => {
        topMovers.push({
          com: $(el).find('.immover_Col1').text().trim(),
          ltp: $(el).find('.immover_Col2').text().trim(),
          high: $(el).find('.immover_Col3').text().trim(),
          low: $(el).find('.immover_Col4').text().trim(),
          volume: $(el).find('.immover_Col5').text().trim(),
        });
        if (pos + 1 === 5) return false;
      }
    );
    return res.status(200).json({
      success: true,
      topMovers,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err,
    });
  }
};

exports.marketComparison = async (req, res, next) => {
  try {
    const { body: html } = await got('https://www.cse.com.bd/');
    const $ = cheerio.load(html);
    let market = [];
    let colHead = ['index', 'per', 'trade', 'volume'];
    $('div.tabbed_area > .top_tabs > li > a').each((idx, mrkt) => {
      market[idx] = {};
      market[idx].market = $(mrkt).text().trim();
      const valueUrl = `#top_content_${
        idx + 1
      } #mitabs-1 > div:nth-child(1) .top_MIrow1 .top_Col1_row .top_Col3`;
      $(valueUrl).each((pos, val) => {
        if (pos === 4) return false;
        market[idx][colHead[pos]] = $(val).text();
      });
    });
    return res.json(market);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err,
    });
  }
};
