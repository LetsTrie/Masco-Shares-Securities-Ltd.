import React, { Fragment } from 'react';
import Logo from '../assests/images/logo.png';
import { Redirect } from 'react-router-dom';

const NavUpperPart = (props) => {
  const gotoHomepage = () => {
    return <Redirect to='/' />;
  };

  return (
    <Fragment>
      <div className='page_upper_heading'>
        <div className='page_upper_heading-address'>
          <p>
            MASCO Center, House 6, level 2, Road 13, <br />
            Sector 3, Jasimuddin Avenue, Uttara-1230
            <br />
          </p>
        </div>
        <div className='page_upper_heading-logo' onClick={gotoHomepage}>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='page_upper_heading-contact'>
          <div className='phone'>
            <p>(+88) 01847-258965</p>
          </div>
          <span className='vertical_line'>|</span>
          <div className='icons'>
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
              className='fa fa-twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              {null}
            </a>
            <a
              href='http://google.com/'
              className='fa fa-linkedin'
              target='_blank'
              rel='noopener noreferrer'
            >
              {null}
            </a>
          </div>
        </div>
      </div>
      <div className='topNavClassUpperDivider'></div>
    </Fragment>
  );
};

export default NavUpperPart;
