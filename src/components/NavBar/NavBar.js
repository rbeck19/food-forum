import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import '../../index.css'

export default function NavBar({ user, setUser, userName, setUserName }) {

    function handleLogOut() {
        //we should delagate the actual logging out to the users service
        userService.logOut()
        setUser(null)
        setUserName('')
    }

    return (
        <nav className="nav-bar">
            <div className="nav-bar-contents">
                <span className="nav-left">
                    <Link className="link" to="/main">Home Page</Link>
                    &nbsp; | &nbsp;
                    <Link className="link" to="/user_recipes">Your Recipes</Link>
                </span>
                <span className="nav-right">
                    {/* <Link to="/recipe_details">Recipe Details Page</Link> */}

                    <span>Logged in as {userName}</span>
                    &nbsp; | &nbsp;
                    <Link className="link" to="" onClick={handleLogOut}>Log Out</Link>
                </span>
            </div>
        </nav>
    )
}