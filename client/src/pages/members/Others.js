import React from 'react';

import NavUpperPart from '../../components/NavUpperPart';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import data from '../../data/members';
import Members from '../../components/Members';

const Others = () => {
  const directorList = data.filter((x) => x.category === 'others');
  return (
    <div className='ourDirectors'>
      <NavUpperPart />
      <Navbar />
      <section>
        <div className='aboutUsDirectorsBanner'>
          <h2>Board Of Directors</h2>
        </div>
      </section>
      <section className='meetExperts meetExpertsDetails'>
        <div className='meetExperts_flx'>
          {directorList.map((mem) => (
            <Members key={mem._id} data={mem} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Others;
