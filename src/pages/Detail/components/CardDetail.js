import React from 'react';

export const CardDetail = ({ image, description }) => (
  <section className='card__detail'>
    <img src={image} alt='Detail of the place' />
    <p>{description}</p>
  </section>
);
