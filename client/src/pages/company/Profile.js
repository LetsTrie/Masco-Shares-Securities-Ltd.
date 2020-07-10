import React from 'react';

import NavUpperPart from '../../components/NavUpperPart';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Profile = () => {
  return (
    <div className='bodyWrapper'>
      <NavUpperPart />
      <Navbar />

      <section>
        <div class='aboutUsCompanyBanner'>
          <h1>MASCO</h1>
          <h4>Share & Securities Limited</h4>
        </div>
      </section>

      <section>
        <div class='aboutUsCompany_aboutUs'>
          <div class='aboutUsCompany_aboutUs_heading'>
            <h3>
              About <span>MSSL</span>
            </h3>
          </div>
          <div class='aboutUsCompany_aboutUs_desc'>
            <p>
              MASCO Shares and Securities Limited (MSSL) is one of the renowned
              brokerage houses in the capital market of Bangladesh. The company,
              being the 35th TREC Holder of the Chittagong Stock Exchange
              Limited, is operating its operation since 2017 with good
              reputation. The company is authorized and regulated by Bangladesh
              Securities and Exchange Commission (BSEC) of the government of
              Bangladesh and a Full Service Depository Participant of Central
              Depository Bangladesh Limited (CDBL). The principal activity of
              the Company is to provide all kinds of stock brokerage services to
              its clients. Since its inception, MASCO Shares & Securities
              Limited has been entrusted with both the license i.e. Stock Broker
              license and Stock Dealer License.
            </p>
          </div>
          <div className='aboutUsCompany_aboutUs_licence'>
            <p>
              <span>BSEC REG:</span> Stock Broker Reg.-3.2/CSE-35/2016/303,
              Stock Dealer Reg.-3.2/CSE-35/2016/304
            </p>
            <p>
              <span>CSE TREC: </span> 035
            </p>
            <p>
              <span>DP Registration Certificate No:</span> CDBL-DP-429
            </p>
            <p>
              <span>Broker</span> ID: 121035 (Code: MASCO)
            </p>
            <p>
              <span>Dealer</span> ID: 129035 (Code: MASCD)
            </p>
          </div>
        </div>
      </section>

      <section>
        <div class='aboutUs_Mdir'>
          <div class='aboutUs_Mdir_flxPrnt'>
            <div class='aboutUs_Mdir_flxChld'>
              <div class='aboutUsMdirImage'>
                <img
                  src={require('../../assests/images/directors/MASabur.jpg')}
                  alt='Managing Director'
                />
              </div>
            </div>
            <div class='aboutUs_Mdir_flxChld'>
              <div class='quote'>
                <div class='quote_details'>
                  <p>
                    <i class='fa fa-quote-left'>&nbsp;&nbsp;</i>
                    Management of MASCO Shares & Securities Limited cherishes a
                    dream of making this business entity one of the leading
                    Houses in the capital market of Bangladesh. To make this
                    dream come true, all-out attempts backed by the management
                    of MASCO Group, have always been committed from its
                    inception of the capital market.
                  </p>
                </div>
                <div class='quote_mdir'>
                  <p>M.A Sabur</p>
                </div>
                <div class='quote_mdir_pos'>
                  <p>Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='collab'>
        <div class='collab_heading'>
          <h1>
            Our <span> Collaboration</span>
          </h1>
        </div>
        <div class='collab_marq'>
          <div class='Collab_flx_prnt_prnt'>
            <OwlCarousel
              className='owl-theme'
              loop
              margin={10}
              autoplay
              autoplayTimeout={1700}
              autoplayHoverPause
              responsiveClass
              responsive={{
                0: {
                  items: 1,
                },
                520: {
                  items: 2,
                },
                900: {
                  items: 3,
                },
                1500: {
                  items: 4,
                },
              }}
            >
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/bida.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='http://bida.gov.bd/'>
                    Bangladesh Investment Development Authority
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/bsec.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='https://www.sec.gov.bd/'>
                    Bangladesh Securities & Exchange Commission
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/cdbl.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='https://www.cdbl.com.bd/'>
                    Central Depository of Bangladesh Limited
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/dse.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='https://www.dsebd.org/'>
                    Dhaka Stock Exchange
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/cse.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='https://www.cse.com.bd/'>
                    Chittagong Stock Exchange
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/gov.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='https://mof.gov.bd/'>
                    Ministry of Finance
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/bb.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='https://www.bb.org.bd/'>
                    Bangladesh Bank
                  </a>
                </div>
              </div>
              <div class='Collab_flx_prnt'>
                <div class='Collab_flx_chld'>
                  <img
                    src={require('../../assests/images/collaboration/gov.png')}
                    alt=''
                  />
                </div>
                <div class='Collab_flx_chld'>
                  <a target='_blank' href='http://nbr.gov.bd/'>
                    National Board of Revenue
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
