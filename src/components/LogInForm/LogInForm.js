import { useState } from "react"
import { logIn } from "../../utilities/users-service"
import '../../index.css';


export default function LogInForm({ setUser, showForm, setShowForm }) {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")

    function handleChange(event) {
        //clone the state and update it with new key value
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault()
            const userToLogin = await logIn(credentials)
            setUser(userToLogin)
        } catch {
            setError("Invalid Login Credentials")
        }
    }

    return (
        <form className="login-container" autoComplete="off" onSubmit={handleSubmit}>
            <div className="login-form">
                <div className="login-input">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="login-input">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="login-button" type="submit">Log In</button>
                <div className="toggle-text">
                    Need to make an Account?
                </div>
                <div className="toggle-text">Sign Up&nbsp;
                    <span onClick={() => setShowForm(!showForm)}>Here</span>
                </div>
                <div className="error-message" id="login">{error}</div>
            </div>
        </form>
    )
}