import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className='footerr_wrapper'>
        <div className='footerr'>
          <div className='footer_flex_child'>
            <div className='flex_child_header'>
              <p>FOLLOW US</p>
            </div>
            <div className='flex_child_info'>
              <div className='fourIcons'>
                <a
                  href='https://www.facebook.com/Masco-Shares-and-Securities-Ltd-190556921506722'
                  className='fa fa-facebook'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {null}
                </a>
                <a
                  href='http://google.com/'
                  className='fa fa-youtube'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {null}
                </a>
                <a
                  href='http://google.com/'
                  className='fa fa-instagram'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {null}
                </a>
                <a
                  href='http://google.com/'
                  className='fa fa-twitter'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {null}
                </a>
              </div>
            </div>

            <div className='flex_child_header pt-5'>
              <p>NEWSLETTER</p>
            </div>
            <div className='flex_child_info'>
              <div className='inputBox'>
                <input type='text' placeholder='Email address' />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className='footer_flex_child'>
            <div className='flex_child_header'>
              <p>OUR LOCATION</p>
            </div>
            <div className='flex_child_info pt-2'>
              <div className='google_map_location'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8064486880257!2d90.39605995090798!3d23.861005784459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4212a884db1%3A0xe94fef61cef85619!2sMasco%20Center%2C%20House%20-06%2C%20Road%20-01%2C%20Sector%20-03%2C%20Jashimuddin%20Ave%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1592141499884!5m2!1sen!2sbd'
                  width='600'
                  height='450'
                  frameBorder='0'
                  style={{ border: '0' }}
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'
                  title='Google Map Location'
                ></iframe>
              </div>
            </div>
          </div>

          <div className='footer_flex_child'>
            <div className='flex_child_header'>
              <p>CONTACT US</p>
            </div>
            <div className='flex_child_info'>
              <div className='flex_single_child'>
                <div className='flex_single_child_icon'>
                  <span className='fa fa-map-marker'> </span>
                </div>
                <div className='flex_single_child_info'>
                  <p className='info_heading'>Address</p>
                  <p className='info_details'>
                    MASCO Center, House 6, level 2, Road 1, Sector 3, Jasimuddin
                    Avenue, Uttara, Dhaka-1230
                  </p>
                </div>
              </div>

              <div className='flex_single_child'>
                <div className='flex_single_child_icon'>
                  <span className='fa fa-phone'></span>
                </div>
                <div className='flex_single_child_info'>
                  <p className='info_heading'>Phone</p>
                  <p className='info_details'>+8801847258965</p>
                </div>
              </div>
              <div className='flex_single_child'>
                <div className='flex_single_child_icon'>
                  <span className='fa fa-envelope-open'></span>
                </div>
                <div className='flex_single_child_info'>
                  <p className='info_heading'>Email</p>
                  <p className='info_details'>shares@mascogrp.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
