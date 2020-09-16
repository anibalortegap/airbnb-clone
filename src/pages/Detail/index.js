import React from 'react';

import { Title } from '../../components/Title';
import { CardDetail } from './components/CardDetail';
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';
import { useParams } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#fc642d',
  borderColor: '#fe530c',
};

export const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <FramePage>
      <Title label={'Parapente Chicamocha'} />
      <CardDetail />
      <Button
        isLink={true}
        linkTo={`/booking/${id}`}
        type={'submit'}
        label={'Reserva Ahora!'}
        style={buttonStyle}
      />
    </FramePage>
  );
};
