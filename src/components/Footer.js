import React from 'react';
import { MDBFooter,  MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        /* 
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <span>
                <a rel="noreferrer" href='https://www.linkedin.com/in/jonah-lewis-507984273/' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" size='2x'/>
                LinkedIn</a>
                <a rel="noreferrer" href='https://github.com/jonahscottlewis' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="github" size='2x'/>
                GitHub</a>
                <a rel="noreferrer" href='https://twitter.com/Jonahslewis96' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" size='2x'/>
                Twitter</a>
                </span>
                <br></br>
                <span className="px-4">Thanks for viewing!</span>
            </div>
        </MDBFooter>
        */
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <span>
                <a rel="noreferrer" href='https://www.linkedin.com/in/jonah-lewis-507984273/' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" size='2x'/>
                LinkedIn</a>
                <a rel="noreferrer" href='https://github.com/jonahscottlewis' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="github" size='2x'/>
                GitHub</a>
                <a rel="noreferrer" href='https://twitter.com/Jonahslewis96' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" size='2x'/>
                Twitter</a>
                </span>
                <br></br>
                <span className="px-4">Thanks for viewing!</span>
            </div>
        </MDBFooter>
    );
};

export default Footer;