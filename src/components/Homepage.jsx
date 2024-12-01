import bloodLogo from "../assets/images/images.png";
// import React from "react";
// import Link from "react-router"
import { NavLink, Link } from "react-router";

function Homepage() {
  return (
    <>
      <nav >
        <NavLink className="ml-20" to="/registrationForm">to registration Form</NavLink>
        <NavLink className="ml-5" to="/List">to donors list</NavLink>
      </nav>

      <section>
        <h2 className="text-3xl text-red-500  font-bold underline px-auto">
          Tapk kraujo donoru!
        </h2>

        <div className="">
          <img className="mx-auto " src={bloodLogo} alt="" />
        </div>

        <Link to="/registrationForm">
          {" "}

          <button className="btn bg-green-500 btn-neutral mx-auto">
            Spausk
          </button>
        </Link>
      </section>

    </>
  );
}

export default Homepage;
