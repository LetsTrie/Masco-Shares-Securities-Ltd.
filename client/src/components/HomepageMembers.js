import React from 'react';
import Members from './Members';
import data from '../data/members';

const HomepageMembers = () => {
  return (
    <section className='meetExperts'>
      <div className='meetExperts_header'>
        <h2>Our Professionals</h2>
      </div>
      <div className='meetExperts_flx'>
        {data
          .filter((x) => x.inHomepage === true)
          .map((mem) => (
            <Members key={mem._id} data={mem} />
          ))}
      </div>
    </section>
  );
};

export default HomepageMembers;
