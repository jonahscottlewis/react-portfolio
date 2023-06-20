import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const Navigation = (props) => {
  const {
    currentTab,
    handleTabChange,

  } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);


  return (

    <div className="nav-div" >
    <nav>  
    <ul>
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handleTabChange('Project')}
            // Check to see if the currentTab is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
    </ul>
    </nav>
    </div>
  );
}

export default Navigation;

// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBNavbarBrand,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function Navigation() {
//   const [showNavColor, setShowNavColor] = useState(false);

//   return (
//     <>
//       <MDBNavbar expand='lg' dark bgColor='primary'>
//         <MDBContainer fluid>
//           <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//           {/* <MDBNavbarToggler
//             type='button'
//             data-target='#navbarColor02'
//             aria-controls='navbarColor02'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavColor(!showNavColor)}
//           > */}
//             <MDBIcon icon='bars' fas />
//           {/* </MDBNavbarToggler> */}
//           <MDBCollapse show={showNavColor} navbar>
//             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//               <MDBNavbarItem className='active'>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>

      
//     </>
//   );
// }

