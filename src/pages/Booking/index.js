import React, { useState, useEffect } from 'react';
import { FramePage } from './../FramePage';
import { Button } from './../../components/Button';
import { useParams } from 'react-router-dom';
import { requestHttp } from '../../config/HttpRequest';

export const BookingPage = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);

  const bookingHandler = (e) => {
    e.preventDefault();
    requestBooking();
  };

  const requestBooking = async () => {
    try {
      const data = {
        id,
        name,
        phone,
        email,
        bookingDate,
      };
      const request = await requestHttp('post', '/booking/', data);
      console.log(request);
      alert('Booking successful');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsValidForm(
      name !== '' && phone !== '' && email !== '' && bookingDate !== '',
    );
  }, [name, phone, email, bookingDate]);
  return (
    <FramePage>
      <form onSubmit={bookingHandler} className='booking-form'>
        <div>
          <label>Nombre:</label>
          <input
            value={name}
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input
            value={phone}
            type='tel'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            value={bookingDate}
            type='date'
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>

        <Button
          disabled={!isValidForm}
          type={'submit'}
          label={'Reserva Ahora!'}
        />
      </form>
    </FramePage>
  );
};
