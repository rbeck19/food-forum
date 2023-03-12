import { Component } from "react";
import { signUp } from "../../utilities/users-service"
import './SignUpForm.css'


export default class SignUpForm extends Component {
    //state is just a POJO
    state = {
        email: "",
        password: "",
        password_confirmation: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({
            //name,email,password,conform : value
            [event.target.name]: event.target.value,
            error: ""
        })
    }



    handleSubmit = async (event) => {
        event.preventDefault()
        // alert(JSON.stringify(this.state))

        //try something, if it works great
        try {
            //taking the state and making a copy of the state and assigning it to formData variable
            //delete the error and confirm so that it doesnt get sent to back end
            const formData = { ...this.state }
            delete formData.error
            //delete formData.password_confirmation
            //logs user name, email, password
            console.log(formData)

            //wait for a response back from the server
            const user = await signUp(formData)
            //logs the all user info
            console.log(user)
            //get user when signed up
            this.props.setUser(user)

        } catch (error) {
            //if it doesnt work, error handle
            console.error(error)
            this.setState({
                error: "Sign up failed - Try again later"
            })
        }
    }

    render() {
        //if password does not equal confirm:  FALSE
        const disable = this.state.password !== this.state.password_confirmation

        return (

            <form className="login-container" autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="login-form">
                    <div className="header">Recipe Food Forum</div>
                    <div className="login-input">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="login-input">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="login-input">
                        <label>Confirm</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button className="signup-button" type="submit" disabled={disable}>Sign Up</button>
                    <div className="toggle-text">
                        Already have an Account? 
                        </div>
                        <div className="toggle-text">Login&nbsp;<span onClick={() => this.props.setShowForm(!this.props.showForm)}>
                            Here</span>
                        </div>
                    
                    <div className="error-message">{this.state.error}</div>
                </div>
            </form>
        )
    }
}






