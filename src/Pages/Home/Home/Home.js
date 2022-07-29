import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Appointment />
    </div>
  );
};

export default Home;