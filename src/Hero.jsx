import React from 'react';

import j3 from './Image/work/coronation_dehradun.jpg' ;
import j4 from './Image/b4.jpg' ;
import Carousel from 'react-bootstrap/Carousel';
import i1 from "./Image/work/Harrawala_dehradun.jpg";
import i2 from "./Image/work/Didihat_Pithoragarh.jpg";
import i5 from "./Image/work/i5.jpg";
import i6 from "./Image/work/i6.jpg";




const Hero=()=>{
    return(
        <>
        <div className="container-fluid">
        <div className="row">
              <div className="col-sm-12 full">
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={i1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Construction Progress Monitoring System </h3>
      <p>(CPMS)</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={i5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Construction Progress Monitoring System </h3>
      <p>(CPMS)</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={j3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Construction Progress Monitoring System </h3>
      <p>(CPMS)</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={i6 }
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Construction Progress Monitoring System</h3>
      <p>(CPMS)</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






              </div>  
        </div>
        </div>


        </>
    );
};

export default Hero;