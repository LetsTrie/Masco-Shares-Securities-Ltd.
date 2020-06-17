import React, { useEffect } from 'react';

import $ from 'jquery';
window.jQuery = window.$ = $;
require('flexslider');

const HomepageSlider = () => {
  useEffect(() => {
    (() => {
      $('.flexslider').flexslider({
        easing: 'swing',
        animation: 'fade',
        slideshowSpeed: 2500,
        animationSpeed: 600,
        slideshow: true,
        prevText: '',
        nextText: '',
      });
    })();
  }, []);
  return (
    <div>
      <section className='flexslider'>
        <ul className='slides'>
          <li className='overlay banner1'>
            <div className='container'>
              <div className='probootstrap-slider-text text-center'>
                <h1 className='probootstrap-heading probootstrap-animate'>
                  MASCO
                </h1>
                <h2 className='probootstrap-subheading probootstrap-animate'>
                  Shares & Securities Limited
                </h2>
              </div>
            </div>
          </li>
          <li className='overlay banner2'>
            <div className='container'>
              <div className='probootstrap-slider-text text-center'>
                <h1 className='probootstrap-heading probootstrap-animate'>
                  MASCO
                </h1>
                <h2 className='probootstrap-subheading probootstrap-animate'>
                  Shares & Securities Limited
                </h2>
              </div>
            </div>
          </li>
          <li className='overlay banner3'>
            <div className='container'>
              <div className='probootstrap-slider-text text-center'>
                <h1 className='probootstrap-heading probootstrap-animate'>
                  MASCO
                </h1>
                <h2 className='probootstrap-subheading probootstrap-animate'>
                  Shares & Securities Limited
                </h2>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomepageSlider;
