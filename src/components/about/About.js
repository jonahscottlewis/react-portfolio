import React from "react";
import Jonah from '../../images/Jonah.jpg'


const About = () => {
  return (

    <div className="about-me-card">
      <h1>About me</h1>
      { <img className="cover-photo"
      src={ Jonah }></img>}
      <p>Welcome to my portfolio! I am a recent graduate of the esteemed UC Davis Coding Bootcamp, equipped with a solid foundation in software development and a passion for creating innovative solutions. With a dedication to lifelong learning and a drive for excellence, I am eager to embark on a fulfilling career as a junior software developer. This portfolio showcases my diverse range of projects, highlighting my skills in front-end and back-end development, problem-solving, and collaboration. Join me on this exciting journey as we explore the possibilities of technology together. Let's build the future, one line of code at a time.</p>
    </div>

  );
}


// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardText,
//   MDBCardImage
// } from 'mdb-react-ui-kit';


// const About = () => {
//   return (
//     <MDBCard>
//       <MDBCardImage src={ Jonah } />
//       <MDBCardBody>
//         <MDBCardText>
//         Welcome to my portfolio! I am a recent graduate of the esteemed UC Davis Coding Bootcamp, equipped with a solid foundation in software development and a passion for creating innovative solutions. With a dedication to lifelong learning and a drive for excellence, I am eager to embark on a fulfilling career as a junior software developer. This portfolio showcases my diverse range of projects, highlighting my skills in front-end and back-end development, problem-solving, and collaboration. Join me on this exciting journey as we explore the possibilities of technology together. Let's build the future, one line of code at a time.
//         </MDBCardText>
//       </MDBCardBody>
//     </MDBCard>
//   );
// }

export default About;