import React from 'react';

export const Button = ({ label = 'Botón', type = 'submit', style = {} }) => (
  <button style={style} type={type} className='button'>
    {label}
  </button>
);
