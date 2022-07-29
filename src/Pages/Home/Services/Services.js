import React, { useEffect, useState } from 'react';
import EachService from '../EachService/EachService';

import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, []);

  return (
    <div className='services' id='services'>
      <h1>Undertaken Services</h1>
      <div className='each-service'>
        {
          services.map(service =>
            <EachService
              key={service.id}
              eachService={service}
            />
          )
        }
      </div>
    </div>
  );
};

export default Services;