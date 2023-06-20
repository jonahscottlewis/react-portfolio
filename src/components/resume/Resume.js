export default function Resume() {
  return (

    <div class="resume">
      <div className="resume-header">
        <h1 class="h1">My Resume</h1>
        <p>       <h3>JONAH LEWIS</h3>
          <br></br>
          <h4>Fair Oaks, CA | jonahslewis96@gmail.com | (916) 308-9237</h4>
        </p>
      </div>

      <br></br>

      <div className="resume-body">
        Work Experience
        <br></br>

        <div>
          <h5 className="workplace">Chili's, Fair Oaks, CA March 2023-present</h5>
          Server/To-Go
          <br></br>
          <ul>
            <li>Making a connection with the guest and curating their experience</li>
            <li>Handling a high volume of orders and prioritizing tasks</li>
          </ul>
        </div>

        <br></br>

        <div>
          <h5 className="workplace">Door Dash, San Francisco, CA April 2020-Present</h5>
          Delivery Driver
          <br></br>
          <ul>
            <li>Be self-starting and motivating</li>
            <li>Adapt to environment and learn when the busy times occur and when the orders will come in</li>
            <li>Almost 10,000 orders completed in 2 years of delivering</li>
          </ul>
        </div>

        <br></br>

        <div>
          <h5 className="workplace">SPIN, San Francisco, CA September 2019-April 2020</h5>
          Bartender/Bar Back
          <ul>
            <li>Be knowledgeable of cocktail ingredients and spirits on Menu</li>
            <li>Gain experience mixing cocktails and serving drinks behind the bar</li>
            <li>Organize and restock keg room/alcohol shelves</li>
            <li>Work as a team in a fast paced environment with a high volume of customers</li>
          </ul>
        </div>

        <br></br>

        <div>
          <h5 className="workplace">25 Lusk, San Francisco, CA January 2019-May 2019</h5>
          Bar Back/Food Runner
          <ul>
            <li>Experience working in a fine dining environment.</li>
            <li>Developed superior customer service skills working under Michelin star chef Matthew Dolan's
              high standards and attention to detail</li>
          </ul>
        </div>

        <br></br>

        <div>
          <h5 className="workplace">The Italian Homemade Company, San Francisco, CA June 2018-September 2019</h5>
          Shift Lead/Server/Cashier
          <ul>
            <li>Experiencing supervising team members and taking on responsibility of opening and closing
                restaurant</li>
            <li>Further food and drink knowledge</li>
          </ul>
        </div>

        <br></br>

        <div>
          <h5 className="workplace">4505 Burgers & BBQ, San Francisco, CA August 2016-August 2018</h5>
          Server /Cashier
          <ul>
            <li>Be knowledgeable about all items on menu as well as their sources</li>
            <li>Handle issues within restaurant, both amongst the staff and the guests in order to ensure a
                cooperative, pleasant work environment/restaurant experience</li>
            <li>Further my knowledge of beer and alcoholic beverages</li>
          </ul>
        </div>

        <div>
          <h5>References</h5>
          <ul>
         <li>Dan Quiocho (4505) 650-515-0029</li>
         <li>Mike Springer (25 Lusk) 707-337-6520</li>
         </ul>
        </div>

        <br></br>

      </div>

    </div>

  );
}

  // import React from 'react';
// import {
//     MDBContainer,
//     MDBCard,
//     MDBCardImage,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardFooter,
//     MDBBtn
//  } from 'mdb-react-ui-kit';
//  import resumePic from '';

// const Resume = () => {
//     const pdfUrl = ''
//     return (
//         <MDBContainer fluid className="vh-100">
//             {/* stored at "" */}
//             <div className="d-flex justify-content-center">
//             <MDBCard className="w-25">
//                 <MDBCardImage className="img-thumbnail" position="top" src={resumePic} />
//                 <MDBCardBody>
//                 <MDBCardTitle>Download Resume:</MDBCardTitle>
//                 <MDBCardText>Press the button below to download a copy of my resume.</MDBCardText>
//                 </MDBCardBody>
//                 <MDBCardFooter className="text-center">
//                 <MDBBtn href={pdfUrl}>DOWNLOAD</MDBBtn>
//                 </MDBCardFooter>
//             </MDBCard>
//             </div>
//         </MDBContainer>
//     )
// };