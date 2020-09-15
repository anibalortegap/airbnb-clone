import React from 'react';
import { Score } from '../../../components/Score';
export const Housing = ({ id, image, place, score, users, description }) => (
  <section className='housing'>
    <img src={image} />
    <div>
      <h3>{description}</h3>
      <h6>{place}</h6>
      <Score score={score} users={users} />
    </div>
  </section>
);
