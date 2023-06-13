import React from 'react';

/* 
<div>

<div>

*/




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

const Project = () => {
    
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail project-photo" position="top" src={notedImg} />
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
                        <MDBCardImage className="img-thumbnail project-photo" position="top" src={homeImg} />
                        <MDBCardBody>
                        <MDBCardTitle>Home</MDBCardTitle>
                        <MDBCardText>
                            An application which inventories the items in your home for insurance records.
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/jonahscottlewis/Home'>GitHub Repo</MDBCardLink>
                        <MDBCardLink href='https://myhome.herokuapp.com/'>Deployed Heroku app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail project-photo" position="top" src={weatherImg} />
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

export default Project;
