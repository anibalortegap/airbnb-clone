import React, { useEffect, useState } from 'react';
import { Housing } from './Housing';
import { requestHttp } from '../../../config/HttpRequest';

export const Experiences = () => {
  const [experiencesData, setExperiencesData] = useState([]);

  useEffect(() => {
    getAllExperiences();
  }, []);

  const getAllExperiences = async () => {
    try {
      const response = await requestHttp('get', '/experiencies');
      setExperiencesData(response.experiences);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='experiences'>
      {experiencesData.map((item) => (
        <Housing key={item._id} {...item} />
      ))}
    </section>
  );
};
