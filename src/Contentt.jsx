import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import DatatablePage from './Table1';
export default function App() {
  const [showShow, setShowShow] = useState(false);
  const [showShows, setShowShows] = useState(false);     
  const toggleShow = () => setShowShow(!showShow);
  const toggleShows = () => setShowShows(!showShows);
  
  return (
    <>
      <MDBBtn tag='a' onClick={toggleShow}>
        Link
      </MDBBtn>

      <MDBBtn onClick={toggleShow}>
      Button
      </MDBBtn>

      <MDBCollapse show={showShow}>
       <DatatablePage/>
      </MDBCollapse>

      <MDBCollapse show={showShows}>
       <DatatablePage/>
      </MDBCollapse>
    </>
  );
}