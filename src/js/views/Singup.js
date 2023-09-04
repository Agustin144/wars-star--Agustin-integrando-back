import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Singup() {
  const [lastName,setLastName]= useState("")
  const [firstName,setFirstName]= useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { store, actions } = useContext(Context)
  const navigate= useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    // actions.singup(firstName, lastName, email, password)
    let logged = await actions.singup(firstName, lastName, email, password)
    if (logged === true) {
      navigate("/login")

    } }

  return (
    <form onSubmit={handleSubmit}>
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            StarWars <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>APPI</span>
          </h1>


        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4'onChange={(e) => setFirstName(e.target.value)} label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4'onChange={(e) => setLastName(e.target.value)} label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4'onChange={(e) => setEmail(e.target.value)} label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4'onChange={(e) => setPassword(e.target.value)} label='Password' id='form4' type='password'/>



              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </form>
  );
}

export default Singup;