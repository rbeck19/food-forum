import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        //we should delagate the actual logging out to the users service
        userService.logOut()
        setUser(null)
    }
    console.log(user)

    return(
        <nav>
            <Link to="/main">Main Page</Link>
            &nbsp; | &nbsp;
            <Link to="/detail">Recipe Detail</Link>
            &nbsp; | &nbsp;
           <span>Welcome, {user.name}</span>
           &nbsp; | &nbsp;
           <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}