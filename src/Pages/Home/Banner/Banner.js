import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption style={{color: 'rgb(255, 115, 0)'}}>
          <h1>Business Law Dexterous</h1>
          <p>To get positive results and maximum remedy, contact with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption style={{color: 'rgb(255, 115, 0)'}}>
          <h1>Business Law Dexterous</h1>
          <p>To get positive results and maximum remedy, contact with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption style={{color: 'rgb(255, 115, 0)'}}>
          <h1>Business Law Dexterous</h1>
          <p>
            To get positive results and maximum remedy, contact with us.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;