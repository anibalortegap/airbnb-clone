import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  label = 'Botón',
  type = 'submit',
  isLink = false,
  linkTo = '/',
  style = {},
}) =>
  isLink ? (
    <Link className='button' style={style} to={linkTo}>
      {label}
    </Link>
  ) : (
    <button style={style} type={type} className='button'>
      {label}
    </button>
  );
