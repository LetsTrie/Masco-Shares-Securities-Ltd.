import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../assests/images/icons/sprite.svg';

const Navbar = () => {
  const [mobilenav, setMobileNav] = useState(false);

  return (
    <Fragment>
      <div className='mobileIcon_abs'>
        <img src={require('../assests/images/logo.png')} alt='Logo' />
      </div>
      <nav>
        <ul
          className={`topNavClass ${mobilenav ? 'responsive' : ''}`}
          id='topNavID'
        >
          <li className='cnav-list active'>
            <Link to='/' className='cnav-link'>
              Home
            </Link>
          </li>
          <li className='cdropdown'>
            <Link className='cdropdown_link'> About us</Link>
            <ul className='cdropdown_list'>
              <li className='cnav-sublist'>
                <Link className='cnav-sublist-menu' to='/company/profile'>
                  Company Profile
                </Link>
              </li>
              <li className='cnav-sublist'>
                <Link className='cnav-sublist-menu' to='/members/directors'>
                  Board of Directors
                </Link>
              </li>
              <li className='cnav-sublist active'>
                <Link className='cnav-sublist-menu' to='/members/others'>
                  Management Team
                </Link>
              </li>
            </ul>
          </li>
          <li className='cnav-list'>
            <Link to='/services' className='cnav-link'>
              Our service
            </Link>
          </li>
          <li className='cnav-list'>
            <Link to='/contact' className='cnav-link'>
              Contact us
            </Link>
          </li>
          <li className='cnav-list'>
            <a
              href='https://www.cse.com.bd/contact'
              target='_blank'
              rel='noopener noreferrer'
              className='cnav-link'
            >
              FAQ
            </a>
          </li>
          <li
            className='cnav-list NavBariconWrapper'
            onClick={() => setMobileNav(!mobilenav)}
          >
            <div className='NavBaricon' style={{ fontSize: '15px' }}>
              <svg>
                <use xlinkHref={`${Sprite}#icon-menu`}></use>
              </svg>
            </div>
          </li>
        </ul>
      </nav>
      <div style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}></div>
    </Fragment>
  );
};

export default Navbar;
