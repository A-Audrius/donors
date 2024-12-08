import { NavLink } from "react-router";


function NotFound() {
    return ( 
        <>
           <NavLink to="/">Back to Homepage</NavLink>

        <h1>404- Page not found</h1>
        </>
     );
}

export default NotFound;