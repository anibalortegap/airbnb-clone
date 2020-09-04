import React from 'react';

import { Title } from '../../components/Title';
import { CardDetail } from './components/CardDetail';
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';

const buttonStyle = {
  backgroundColor: '#fc642d',
  borderColor: '#fe530c',
};

export const DetailPage = () => (
  <FramePage>
    <Title label={'Parapente Chicamocha'} />
    <CardDetail />
    <Button type={'submit'} label={'Reserva Ahora!'} style={buttonStyle} />
  </FramePage>
);
