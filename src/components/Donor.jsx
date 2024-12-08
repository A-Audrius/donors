import { Link } from "react-router";
import { Outlet } from "react-router";
import { useParams } from "react-router";
import { getOne } from "../helpers/get";
import { useEffect, useState } from "react";
import { deleteOne } from "../helpers/delete.js";

function Donor() {
  const { donorID } = useParams();
  const [userTable, setUserTable] = useState(null);

  const getUserTable = async (id) => {
    const userTable = await getOne(id);
    setUserTable(userTable);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;

    try {
      await deleteOne(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserTable(donorID);
  }, [donorID]);

  if (!userTable) return <p>User not Found</p>;

  const { firstname, lastname, gender, age, bloodgroup, id } = userTable;

  return (
    <>
      <Outlet />

      {/* {donorID} */}
      <div className=" absolute  w-60 text-sm left-4 shadow  border bg-slate-50">
        <h1>Firstname: {firstname}</h1>
        <p>Lastname: {lastname}</p>
        <p>gender: {gender}</p>
        <p>age: {age}</p>
        <p>blood group: {bloodgroup}</p>
        <Link to="/list">
          <button className="bg-amber-300 p-1 border-spacing-4">Back</button>
        </Link>
        <Link to="/list">
          {" "}
          <button
            onClick={handleDelete}
            className="bg-red-300 p-1 border-spacing-4  link-error"
          > Delete
          </button>
        </Link>
        {/* <div className="flex gap-4 justify-center"> */}
        {/* <Link className="link-info" to={`edit/${id}`}>Edit</Link> */}

        {/* </div> */}

        {/* <button className="btn bg-gray-400 btn-neutral text-gray-800">išsamiau</button>
      <button className="btn bg-green-300  text-gray-800">redaguoti</button> */}
      </div>
    </>
  );
}

export default Donor;
