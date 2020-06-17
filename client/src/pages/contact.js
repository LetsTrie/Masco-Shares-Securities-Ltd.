import React from 'react';
import NavUpperPart from '../components/NavUpperPart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contact = () => {
  return (
    <div className='contactUs'>
      <NavUpperPart />
      <Navbar />
      <section>
        <div className='getInTouchBanner'>
          <div className='flx-prnt'>
            <div className='getInTouchBanner_primary'>
              <h1>Get In Touch</h1>
            </div>
            <div className='getInTouchBanner_Secondary'>
              <h4>
                Feel free to contact us and we will get back to as soon as
                possible
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='contactUsForm'>
          <div className='contactUsForm_flx'>
            <div className='contactUsForm_flx_form'>
              <form action='#'>
                <div className='textbox'>
                  <label for='nameID'>Full Name</label> <br />
                  <input type='text' placeholder='Your full name' id='nameID' />
                </div>

                <div className='textbox'>
                  <label for='emailID'>Email</label> <br />
                  <input
                    type='text'
                    placeholder='Your email address'
                    id='emailID'
                  />
                </div>

                <div className='textarea'>
                  <label for='messageID'> Your message </label> <br />
                  <textarea
                    id='messageID'
                    rows='4'
                    placeholder='Write down your message in details'
                  ></textarea>
                </div>

                <div className='submitButton text-center'>
                  <button>Submit</button>
                </div>
              </form>
            </div>
            <div className='contactUsForm_flx_contact'>
              <div className='contactUsForm_flx_contact_header'>
                <p>Reach us</p>
              </div>
              <div className='contactUsForm_flx_contact_info'>
                <div className='contactUsForm_flx_contact_info_icon'>
                  <span className='fa fa-envelope'></span>
                </div>
                <div className='contactUsForm_flx_contact_info_des'>
                  <p>shares@mascogrp.com</p>
                </div>
              </div>
              <div className='contactUsForm_flx_contact_info'>
                <div className='contactUsForm_flx_contact_info_icon'>
                  <span className='fa fa-fax'></span>
                </div>
                <div className='contactUsForm_flx_contact_info_des'>
                  <p>02-48954120, 02-48954121</p>
                </div>
              </div>

              <div className='contactUsForm_flx_contact_info'>
                <div className='contactUsForm_flx_contact_info_icon'>
                  <span className='fa fa-phone'></span>
                </div>
                <div className='contactUsForm_flx_contact_info_des'>
                  <p className='contactUsForm_flx_contact_info_des_phone'>
                    01847-258965, 01711-069107, 01612-495364
                  </p>
                </div>
              </div>

              <div className='contactUsForm_flx_contact_info'>
                <div className='contactUsForm_flx_contact_info_icon'>
                  <span className='fa fa-map-marker'></span>
                </div>
                <div className='contactUsForm_flx_contact_info_des'>
                  <p>
                    MASCO Center, House 6, level 2, Road 1, Sector 3, Jasimuddin
                    Avenue, Uttara, Dhaka-1230
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mapDataShow'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8064486880257!2d90.39605995090798!3d23.861005784459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4212a884db1%3A0xe94fef61cef85619!2sMasco%20Center%2C%20House%20-06%2C%20Road%20-01%2C%20Sector%20-03%2C%20Jashimuddin%20Ave%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1592141499884!5m2!1sen!2sbd'
            width='100%'
            height='350'
            frameBorder='0'
            style={{ border: '0' }}
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default contact;
