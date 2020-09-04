import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './Home';
import { DetailPage } from './Detail';
import { BookingPage } from './Booking';

export const Routes = () => (
  <Switch>
    <Route path='/' exact>
      <HomePage />
    </Route>
    <Route path='/detail/:id'>
      <DetailPage />
    </Route>
    <Route path='/booking/:id' component={BookingPage} />
  </Switch>
);
