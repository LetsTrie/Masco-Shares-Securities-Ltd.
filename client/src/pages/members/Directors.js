import React from 'react';

import NavUpperPart from '../../components/NavUpperPart';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import data from '../../data/members';
import Members from '../../components/Members';

const Directors = () => {
  const directorList = data.filter((x) => x.category === 'directors');
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
        <div className='meetExperts_CEO'>
          <Members key={directorList[0]._id} data={directorList[0]} />
        </div>
        <div className='meetExperts_flx'>
          {directorList.slice(1, 5).map((mem) => (
            <Members key={mem._id} data={mem} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Directors;
