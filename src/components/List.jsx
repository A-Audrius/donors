// import DonorsList from "./DonorsList";
// // import UsersList from "./components/DonorsList";

// import RegistrationForm from "./RegistrationForm";
// // import { NavLink } from "react-router";
// import { useForm } from "react-hook-form";
// // import { postdata } from "../helpers/get";
// // import { useState } from "react";
// import { useState, useEffect } from "react";
// // import { getAllData } from "../helpers/get";



// function List() {
//     const [users, setUsers] = useState([]);
//     const [update, setUpdate] = useState(0);
//     const [error, setError] = useState("");
  
//     const fetchData = async () => {
//       try {
//         const data = await getAllData();
//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     useEffect(() => {
//        fetchData();
//   }, [update]);  


//     return ( 
// <>
// <h1>123</h1>


// {/* <RegistrationForm setUpdate={setUpdate} /> */}
//     {/* {!error && <UsersList usersList={users} />}  */}
//       {error && <p>{error}</p>}
//    {/* { <List List={users} />} */}
// </>

//      );
// }

// export default List;