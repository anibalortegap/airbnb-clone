import React, { useEffect, useState } from 'react';
import { Card } from './Card';

export const Ranking = () => {
  const [top, setTop] = useState([]);
  useEffect(() => {
    getExperiencesTop();
  }, []);

  const getExperiencesTop = async () => {
    try {
      const response = await fetch('http://localhost:3001/experiencies/top');
      const data = await response.json();
      setTop(data.top5);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='ranking'>
      {top.map((item) => (
        <Card key={item._id} {...item} />
      ))}

      {top.map((item, i) => (
        <Card
          key={i}
          id={item._id}
          image={item.image}
          title={item.title}
          place={item.place}
        />
      ))}
    </section>
  );
};
