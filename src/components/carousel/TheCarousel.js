import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import ScrollDown from '../scroll-down/ScrollDown';

export default function TheCarousel() {
    return (
        <div className="homepage">
          <Carousel controls="false" indicators interval="2500" pauseOnHover="false">
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={slide3}
      alt="Third slide"
    />
  </Carousel.Item>
 
</Carousel>  
 {/* <ScrollDown /> */}
        </div>
    )
}
