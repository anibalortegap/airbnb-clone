import React from 'react';
import { Link } from 'react-router-dom';

import { Score } from '../../../components/Score';
export const Housing = ({ _id, image, place, score, users, description }) => (
  <Link to={`/detail/${_id}`} className='link'>
    <section className='housing'>
      <img src={image} alt='List of housing' />
      <div>
        <h3>{description}</h3>
        <h6>{place}</h6>
        <Score score={score} users={users} />
      </div>
    </section>
  </Link>
);
