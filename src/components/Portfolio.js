import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      rippleTag='div'
      rippleColor='light'
    >
      <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>
  );
}
