import React, { useEffect } from 'react';
import { Card } from './Card';

const posts = [
  {
    id: 1,
    image:
      'https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg',
    description: 'Casa de descando',
    place: 'Santa Elena',
  },
  {
    id: 2,
    image:
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
    description: 'Parapente',
    place: 'Chicamocha',
  },
  {
    id: 3,
    image:
      'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
    description: 'Disney Fotos',
    place: 'Cali',
  },
  {
    id: 4,
    image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
    description: 'Glamping',
    place: 'Retiro',
  },
  {
    id: 5,
    image:
      'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
    description: 'Vacaciones en plata',
    place: 'Capuganá',
  },
];

export const Ranking = () => {
  useEffect(() => {
    console.log('Initial');
    const userRequest = async () => {
      let response = await fetch('https://api.mocki.io/v1/b043df5a');
      let data = await response.json();
      console.log(data);
      return data;
    };
    userRequest();
  }, []);

  return (
    <section className='ranking'>
      {posts.map((item) => (
        <Card key={item.id} {...item} />
      ))}

      {posts.map((item, i) => (
        <Card
          key={i}
          id={item.id}
          image={item.image}
          description={item.description}
          place={item.place}
        />
      ))}
    </section>
  );
};
