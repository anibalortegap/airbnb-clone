import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => (
  <Link to={`/detail/${props._id}`} className='link'>
    <section
      title='carrousel'
      style={{
        backgroundImage: `url(${props.image})`,
      }}>
      <h2>{props.title}</h2>
      <h6>{props.place}</h6>
    </section>
  </Link>
);
