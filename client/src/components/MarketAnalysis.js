import React, { Fragment, useState, useEffect } from 'react';
import request from 'request';
import cheerio from 'cheerio';
import Loader from './MALoader';
import { Link } from 'react-router-dom';

const MarketAnalysis = () => {
  const [topMovers, setTopMovers] = useState([]);
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [isToggleGainer, setToggleGainer] = useState(true);
  const [marketComparison, setMarketComparison] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const topGainerLoser = () => {
    const listx = isToggleGainer ? topGainers : topLosers;
    return listx.map((val, idx) => {
      return (
        <tr key={`top${idx}${listx}`}>
          <td>{val.com}</td>
          <td>{val.ltp}</td>
          <td>{val.change}</td>
          <td>{val.changeP}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    (async () => {
      // got package is not working....
      await request('https://www.cse.com.bd/', (err, res, html) => {
        if (!err && res.statusCode === 200) {
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
          setTopGainers(topGainers);
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
          setTopLosers(topLosers);
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
          setTopMovers(topMovers);
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
          setMarketComparison(market);
          setIsLoading(false);
        }
      });
    })();
  }, []);
  return (
    <Fragment>
      <section className='topMarketMovers mt-5'>
        <div className='topMarketMovers_header'>
          <h2>Market Analysis</h2>
        </div>
        <div className='topMarketMovers_flx_prnt'>
          <div className='threeTables'>
            <div className='threeTables_header'>
              <h3>Market Informations</h3>
            </div>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Market</th>
                  <th scope='col'>Index</th>
                  <th scope='col'>%</th>
                  <th scope='col'>Trade</th>
                  <th scope='col'>Volume</th>
                  <th scope='col' className='upDownArrow'>
                    Order
                  </th>
                </tr>
              </thead>
              {!isLoading && (
                <tbody>
                  {marketComparison.map((m, idx) => (
                    <tr className='pt-5' key={`comp${idx}`}>
                      <td>{m.market}</td>
                      <td>{m.index}</td>
                      <td>{m.per}</td>
                      <td>{m.trade}</td>
                      <td>{m.volume}</td>
                      <td className='upDownArrow'>
                        <span
                          className={
                            m.per >= 0 ? 'fa fa-arrow-up' : 'fa fa-arrow-down'
                          }
                        ></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {isLoading && (
              <div className='isLoading'>
                <Loader />
              </div>
            )}

            {/* <div className='totalValuedivider'></div>
            <div className='totalValue'>
              <span>Total Value: (in BDT) </span>
              <span>50360.67 mn</span>
            </div> */}
          </div>

          <div className='threeTables'>
            <div className='threeTables_header'>
              <h3>Top 5 Market Movers</h3>
            </div>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Company</th>
                  <th scope='col'>LTP*</th>
                  <th scope='col'>High</th>
                  <th scope='col'>Low</th>
                  <th scope='col'>Volume</th>
                </tr>
              </thead>
              {/* <div className='isLoading'>
                <div className='loader'></div>
              </div> */}

              {!isLoading && (
                <tbody>
                  {topMovers.map((val, idx) => (
                    <tr key={`mover${idx}`}>
                      <td>{val.com}</td>
                      <td>{val.ltp}</td>
                      <td>{val.high}</td>
                      <td>{val.low}</td>
                      <td>{val.volume}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {isLoading && (
              <div className='isLoading'>
                <Loader />
              </div>
            )}

            <div className='viewAll'>
              <Link to='/cse' className='viewAllLink'>
                View All
              </Link>
            </div>
          </div>

          <div className='threeTables'>
            <div className='threeTables_header_two_btn'>
              <button
                onClick={() => setToggleGainer(!isToggleGainer)}
                className={isToggleGainer ? 'active' : ''}
              >
                Top 5 Gainers
              </button>
              <button
                onClick={() => setToggleGainer(!isToggleGainer)}
                className={!isToggleGainer ? 'active' : ''}
              >
                Top 5 Losers
              </button>
            </div>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Company</th>
                  <th scope='col'>LTP*</th>
                  <th scope='col'>Change</th>
                  <th scope='col'>Change(%)</th>
                </tr>
              </thead>

              {!isLoading && <tbody>{topGainerLoser()}</tbody>}
            </table>
            {isLoading && (
              <div className='isLoading'>
                <Loader />
              </div>
            )}

            <div className='viewAll'>
              <Link to='/cse' className='viewAllLink'>
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MarketAnalysis;
