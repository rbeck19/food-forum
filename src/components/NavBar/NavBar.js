import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser, userName, setUserName }) {

    function handleLogOut() {
        //we should delagate the actual logging out to the users service
        userService.logOut()
        setUser(null)
        setUserName('')
    }

    return(
        <nav>
            <Link to="/main">Home Page</Link>
            &nbsp; | &nbsp;
            <Link to="/user_recipes">Your Recipes</Link>
            {/* <Link to="/recipe_details">Recipe Details Page</Link> */}
            &nbsp; | &nbsp;
           <span>Logged in as {userName}</span>
           &nbsp; | &nbsp;
           <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}