import bloodLogo from "../assets/images/images.png";
// import React from "react";
// import Link from "react-router"
import { NavLink, Link } from "react-router";

function Homepage() {
  return (
    <>
      <nav className="text-right">
        <NavLink className="ml-20" to="/registrationForm">
          to registration Form
        </NavLink>
        <NavLink className="ml-5" to="/List">
          to donors list
        </NavLink>
      </nav>

      <section className="section-hp text-center">
        <h2 className="hash2 text-3xl text-red-500  font-bold underline pb-5">
          Tapk kraujo donoru!
        </h2>

        <div className="pb-5">
          <img className="mx-auto " src={bloodLogo} alt="" />
        </div>

        <Link to="/registrationForm">
          {" "}
          <button  className="btn bg-red-200  text-gray-800">
            Spausk
          </button>
        </Link>
      </section>
    </>
  );
}

export default Homepage;
