import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../media/mario.jpg';
import slide2 from '../media/jw4.jpg';
import slide3 from '../media/spiderman.jpg';


    const Sliderhome = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

  
    return (
        <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" style={{ width: '100%', height: '600px' }}/>
        </div>
        <div>
          <img src={slide2} alt="Slide 2" style={{ width: '100%', height: '600px' }}/>
        </div>
        <div>
          <img src={slide3} alt="Slide 3" style={{ width: '100%', height: '600px' }}/>
        </div>
      </Slider>
    );
  };
  
  export default Sliderhome;
  