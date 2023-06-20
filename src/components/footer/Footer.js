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
        <div>
            <div className='footer'>
                <span>
                <a href='mailto:jonahslewis96@gmail.com' className='footer-link'>
                
                jonahslewis96@gmail.com</a>   
                <a href='https://www.linkedin.com/in/jonah-lewis-507984273/' target="_blank" className='footer-link'>
                
                LinkedIn</a>
                <a href='https://github.com/jonahscottlewis' target="_blank" className='footer-link'>
                
                GitHub</a>
                <a href='https://twitter.com/Jonahslewis96' target="_blank" className='footer-link'>
                
                Twitter</a>
                </span>
                <br></br>
                <h3 className="footer-p">Thanks for viewing!</h3>
            </div>
        </div>
    );
};

export default Footer;