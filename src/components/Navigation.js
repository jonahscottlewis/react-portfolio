// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBIcon,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showNavSecond, setShowNavSecond] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//         <MDBNavbarToggler
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavSecond(!showNavSecond)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse navbar show={showNavSecond}>
//           <MDBNavbarNav>
//             <MDBNavbarLink active aria-current='page' href='#'>
//               Home
//             </MDBNavbarLink>
//             <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//             <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//             <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
//               Disabled
//             </MDBNavbarLink>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;