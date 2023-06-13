import React from "react";
import Navigation from "../components/Navigation";

function Header(props) {
	const { currentTab, handleTabChange } = props;
  
	return (
	  <div>
		<section>
		  <header>
			<div>
			  <h1>Jonah Lewis' Portfolio</h1>
			</div>
			<div>
			  <Navigation
				currentTab={currentTab}
				handleTabChange={handleTabChange}
			  ></Navigation>
			</div>
		  </header>
		</section>
		<section>
		  <div>
			{/* { <img 
			src={ coverPhoto } */}
			
			<h4>Welcome!</h4>
		  </div>
		</section>
	  </div>
	);
  }
  
  export default Header;