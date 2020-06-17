import React from 'react';

import Sprite from '../assests/images/icons/sprite.svg';
import services from '../data/services';

import NavUpperPart from '../components/NavUpperPart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ourServices = () => {
  return (
    <div className='ourServicesPage'>
      <NavUpperPart />
      <Navbar />
      <section>
        <div className='OurServiceBanner'>
          <h2>Our Services</h2>
        </div>

        <div className='OurServicePage_all_wrapper'>
          <div className='ourService_all'>
            {services.map((s) => (
              <div className='ourService_each' key={s._id}>
                <div className='EachService_Container'>
                  <div className='EachService_logo'>
                    <svg>
                      <use xlinkHref={`${Sprite}#${s.icon}`}></use>
                    </svg>
                  </div>
                  <div className='EachService_Des'>
                    <div className='serviceName'>
                      <p>{s.title}</p>
                    </div>
                    <div className='serviceDes'>
                      <p> {s.details} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ourServices;
