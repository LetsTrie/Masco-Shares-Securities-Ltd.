import React from 'react';

const Members = (props) => {
  const { name, designation, image } = props.data;
  return (
    <div className='meetExperts_chld'>
      <div className='meetExperts_chld_img'>
        <img src={require(`../assests/images/directors/${image}`)} alt={name} />
      </div>

      <div className='meetExperts_chld_name'>
        <p>{name}</p>
      </div>

      <div className='meetExperts_chld_role'>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Members;
