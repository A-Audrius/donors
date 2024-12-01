import { NavLink } from "react-router";



function Donor({ user }) {
  const { firstname, lastname, gender, age, bloodgroup, id } = user;



  return (
<>


    <div className="shadow m-3">
      <h1>Firstname: {firstname}</h1>
      <p>Lastname: {lastname}</p>
      <p>gender: {gender}</p>
      <p>age: {age}</p>
      <p>blood group: {bloodgroup}</p>
      <button className="btn bg-green-500 btn-neutral ">išsamiau</button>
    </div>
</>


  );
}

export default Donor;
