import Donor from "./Donor";
import { NavLink } from "react-router";

function DonorsList({ usersList }) {
  return (
    <>
<nav >
<NavLink to="/">Back to Homepage</NavLink>
</nav>

      {usersList.map((user) => (
        <Donor user={user} key={user.id} />
      ))}
    </>
  );
}

export default DonorsList;


