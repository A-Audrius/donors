// import Donor from "./Donor";
import { NavLink, Link, Outlet, useSearchParams } from "react-router";
import { getAllData } from "../helpers/get";
import { useState } from "react";
import { useEffect } from "react";
// import SearchBar from "./SearchBar";

function DonorsList({ usersList }) {
  const [userTable, setUserTable] = useState([]);


  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get("search") || "";
  // const filteredNames = userTables.filter((userTable) => userTable.firstname.toLoverCase().includes(searchQuery.toLocaleLowerCase))


  // const handleSearch = (e) => {
  //     const value = e.target.value;
  //     setSearchParams(value?{search:value}:{})
  //   };

   const getUserTable = async () => {
    const userTable = await getAllData();
    setUserTable(userTable);
  };

  useEffect(() => {
    getUserTable();
  }, []);

  return (
    <>
     
      <nav>
        <NavLink to="/">Back to Homepage</NavLink>
      </nav>

      <h1 className="text-center">Donorų sarašas</h1>

      <input
        className="p-2 my-4"
        type="text"
        name="search"
        id="search"
        placeholder="Search by name"
        // onChange={handleSearch}
      />

        <Outlet className="bg-red-800 absolute"/>
    
      {userTable.map((user) => {
        
        return (
          
          <>
          
            <div className=" m-3 border shadow"  key={user.id}>
              <h1>{user.firstname}</h1>
              <p>{user.lastname}</p>
              <Link to={`${user.id}`}>
                {" "}
                <button className="btn bg-gray-400 btn-neutral text-gray-800">
                  išsamiau
                </button>
              </Link>
            </div>
          </>
        );

        // <Donor user={user} key={user.id} />
      })}
    </>
  );
}

export default DonorsList;
