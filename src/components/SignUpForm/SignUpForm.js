import { Component } from "react";
import { signUp  } from "../../utilities/users-service"
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
            error:""
        })
    }
    


    handleSubmit = async (event) => {
        event.preventDefault()
       // alert(JSON.stringify(this.state))

       //try something, if it works great
       try {    
        //taking the state and making a copy of the state and assigning it to formData variable
        //delete the error and confirm so that it doesnt get sent to back end
        const formData = {...this.state}
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

       } catch(error) {
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
        
        return(
           <div className="main">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Confirm</label>
                    <input 
                        type="password"
                        name="password_confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" disabled={disable}>Sign Up</button>
                </form>
                <p className="error-message">{this.state.error}</p>
            </div>
        )
    }
}






