import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';


export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { store, actions } = useContext(Context)
  const navigate= useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    actions.login(email, password)
    let logged = await actions.login(email, password)
    if (logged === true) {
      navigate("/")

    } }


    return (

      <MDBContainer fluid>


        <form onSubmit={handleSubmit}>
          <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
            <MDBCardBody className='p-5 text-center'>

              <h2 className="fw-bold mb-5">Login now</h2>

              <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} label='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' onChange={(e) => setPassword(e.target.value)} label='Password' id='form1' type='password' />

              <MDBBtn className='w-100 mb-4' size='md'>Login</MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </form>

      </MDBContainer>
    );
 };
