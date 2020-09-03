import React from 'react';

export const Card = (props) => (
  <section
    style={{
      backgroundImage: `url(${props.image})`,
    }}>
    <h2>{props.description}</h2>
    <h6>{props.place}</h6>
  </section>
);
