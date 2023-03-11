import { useState } from "react"
import { logIn } from "../../utilities/users-service"
//import * as userAPI from "../../utilities/users-service"
//import SignUpForm from "../SignUpForm/SignUpForm"
import './LoginForm.css';


export default function LogInForm({ setUser, toggle }) {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")

    function handleChange (event) {
            //clone the state and update it with new key value
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit (event){
        try {        
            event.preventDefault()
            const userToLogin = await logIn(credentials)
            setUser(userToLogin)
            console.log(userToLogin)
        } catch {
            setError("Error Logging In")
        }
    }

return (
    <div className="main">
    <form autoComplete="off" onSubmit={handleSubmit}>
        
        <label>Email</label>
        <input 
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
        />
        <label>Password</label>
        <input 
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
        />
       
        <button type="submit">Log In</button>
    </form>
    <p className="error-message"  id="login">{error}</p>
</div>
)
}