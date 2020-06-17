import React from 'react';
import Sprite from '../assests/images/icons/sprite.svg';
import services from '../data/services';
import { Link } from 'react-router-dom';

const HomepageServices = () => {
  return (
    <div>
      <section className='ourServices'>
        <div className='ourServices_header'>
          <h2>Our Services</h2>
        </div>
        <div className='ourServices_Flx'>
          {services.map((s, idx) => (
            <div className='ourServices_chld' key={s._id}>
              <div className='ourServices_chld_abs'>
                <svg>
                  <use xlinkHref={`${Sprite}#${s.icon}`}></use>
                </svg>
              </div>
              <div className='ourServices_chld_num_name'>
                <p>{(idx + 1).toString().padStart(2, '0')}</p>
                <p>{s.title}</p>
              </div>
              <div className='ourServices_chld_des'>
                <p>{s.details}</p>
              </div>
              <div className='seeMore'>
                <Link to='/services' className='seeMoreLink'>
                  See more <span className='fa fa-long-arrow-right'></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomepageServices;
