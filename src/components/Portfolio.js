// import React from 'react';
// import { MDBRipple } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBRipple
//       className='bg-image hover-overlay shadow-1-strong rounded'
//       rippleTag='div'
//       rippleColor='light'
//     >
//       <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
//       <a href='#!'>
//         <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//       </a>
//     </MDBRipple>
//   );
// }

import React from 'react';
import { 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCol, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText,
    MDBCardLink, 
    MDBCardImage,
    MDBCardFooter
    } from 'mdb-react-ui-kit';

import notedImg from '../images/NotedV2 screenshot.png'
import homeImg from '../images/Home App screenshot.png'
import weatherImg from '../images/Weather Dashboard screenshot.png'

const Portfolio = () => {
    
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={notedImg} />
                        <MDBCardBody>
                        <MDBCardTitle>Noted</MDBCardTitle>
                        <MDBCardText>
                            A daily planner app with everything you need to keep your life organized!
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/jonahscottlewis/notedV2'>GitHub Repo</MDBCardLink>
                        <MDBCardLink href='https://noted2.herokuapp.com/'>Deployed Heroku app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={homeImg} />
                        <MDBCardBody>
                        <MDBCardTitle>Home</MDBCardTitle>
                        <MDBCardText>
                            An application which inventories the items in your home for insurance records.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/jonahscottlewis/Home'>GitHub Repo</MDBCardLink>
                        <MDBCardLink href='https://myhome.herokuapp.com/SignInPage'>Deployed Heroku app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={weatherImg} />
                        <MDBCardBody>
                        <MDBCardTitle>Weather Dashboard</MDBCardTitle>
                        <MDBCardText>
                            A Weather application that gives you a 5 day forecast.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/jonahscottlewis/weather-dashboard'>GitHub Repo</MDBCardLink>
                        <MDBCardLink href='https://jonahscottlewis.github.io/weather-dashboard/'>Deployed GitHub pages app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        )
};

export default Portfolio;
