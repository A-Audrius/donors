import bloodLogo from "../assets/images/images.png";
// import React from "react";
// import Link from "react-router"
import { NavLink, Link } from "react-router";

function Homepage() {
  return (
    <>
    <nav>


      <span>Homepage</span>
      <span>Registration Form</span>
      
    </nav>
      <h2 className="text-3xl text-red-500  font-bold underline">
        Tapk kraujo donoru!
      </h2>

      <div className="">
        <img className="mx-auto " src={bloodLogo} alt="" />
      </div>
     <Link to="/registrationform" > <button className="btn bg-green-500 btn-neutral">Spausk</button></Link>
     
    </>
  );
}

export default Homepage;
