import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  label = 'Botón',
  type = 'submit',
  isLink = false,
  linkTo = '/',
  style = {},
  disabled = false,
}) =>
  isLink ? (
    <Link to={linkTo}>
      <button disabled={disabled} style={style} type={type} className='button'>
        {label}
      </button>
    </Link>
  ) : (
    <button disabled={disabled} style={style} type={type} className='button'>
      {label}
    </button>
  );
