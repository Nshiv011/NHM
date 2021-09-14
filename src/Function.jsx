import React, { useState }  from "react";
import { form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import { Form,Row,Col } from 'react-bootstrap';
import i2 from './Image/work/ranikhet_almora.jpg' ;
import i1 from './Image/work/coronation_dehradun.jpg' ;


function MyVerticallyCenteredModal1(props) {
    return (
      <>
      <div className="image-car">
      <Modal
      className="con"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="head1">
          <Modal.Title id="contained-modal-title-vcenter">
          Image Gallery
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
                  <div className="row">
                          <div className="images-carousal">
                          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={i2}
      alt="First slide"
      id="demo"
    />
  </Carousel.Item>

  <Carousel.Item>

    <img
      className="d-block w-100"
      src={i1}
      alt="Third slide"
    />

  </Carousel.Item>
  
</Carousel>
<Modal.Title id="contained-modal-title-vcenter">
        <a href={i1} className="button-d" download><i class="fa fa-download"></i> Download</a>
          </Modal.Title>
 
                          </div>
                  </div>
          </div>


        </Modal.Body>
        
      </Modal>
      </div>
      </>
      
    );
  };

export default MyVerticallyCenteredModal1;