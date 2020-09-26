import React, { useEffect, useState } from 'react';

import { Title } from '../../components/Title';
import { CardDetail } from './components/CardDetail';
import { Button } from '../../components/Button';
import { FramePage } from '../FramePage';
import { useParams } from 'react-router-dom';
import { requestHttp } from '../../config/HttpRequest';

const buttonStyle = {
  backgroundColor: '#fc642d',
  borderColor: '#fe530c',
};

export const DetailPage = () => {
  const { id } = useParams();

  const [experiencesData, setExperiencesData] = useState([]);

  useEffect(() => {
    getDetailExperiences();
  }, []);

  const getDetailExperiences = async () => {
    try {
      const response = await requestHttp('get', `/experiencies/detail/${id}`);
      setExperiencesData(response.experience);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FramePage>
      <Title label={experiencesData.title} />
      <CardDetail {...experiencesData} />
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
