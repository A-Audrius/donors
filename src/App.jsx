// import { useState } from 'react'
// import { BrowserRouter } from "react-router";
import Homepage from "./components/Homepage";
import RegistrationForm from "./components/RegistrationForm";
import { Routes, Route} from "react-router";
import NotFound from "./components/NotFound";
import { useState, useEffect } from "react";
import { getAllData } from "./helpers/get";
import DonorsList from "./components/DonorsList";
import Donor from "./components/Donor";




function App() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
       fetchData();
  }, [update]);  




  return (
    <>

      <Routes>
        <Route  path="/" element={<Homepage/>}/>
        <Route  path="registrationform" element={<RegistrationForm/>}/>
          {/* <Route path="child" element={<Child/>}/> */}
        {/* </Route> */}
        {/* <Route  path="list" element={<DonorsList usersList={users} />}>
          <Route path=":donorID" element={<Donor/>}/>
        </Route> */}
        <Route  path="list" element={<DonorsList usersList={users} />}>
          <Route path=":donorID" element={<Donor/>}/>
        </Route>



         {/* <RegistrationForm setUpdate={setUpdate} /> */}
        <Route  path="*" element={<NotFound/>}/>
      </Routes>

      {/* {!error && <DonorsList usersList={users} />} */}
      {error && <p>{error}</p>}

    </>
  )
}

export default App





