import { Component } from "react";
import { signUp } from "../utilities/users-service"
import './style.css';
import Footer from "./Footer"

export default class Signup extends Component {

    state = {
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ""
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm

            //wait for a response from the server
            const user = await signUp(formData)
            this.props.setUser(user)

        } catch (error) {
            console.error(error)
            this.setState({
                error:"Sign Up failed, try again later "
            })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm
        return(
            <div className="main">
                <div className="title">Recipe Food Forum</div>
                {/* <div className="form-container"> */}
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                    
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                    <label>Confirm password</label>
                    <input type='password' name='confirm' value={this.state.confirm} onChange={this.handleChange} required/>

                    {/* <button className="auth-button" type="submit" disabled={disable}>Sign Up</button> */}
                    <button type="submit" className="signup">Signup</button>
                    {/* <button className="signin" onClick={Login}>Log In</button> */}
                    <button className="signin">Log In</button>
                    </form>
                    <Footer/>
                {/* </div> */}
                    <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}





// import React, { useState } from "react"
// import {useNavigate} from "react-router-dom"
// import './style.css';
// import Footer from "./Footer"
// import { signUp } from "../utilities/users-service";


// function Signup(props) {
//     const path = useNavigate()

//     const [data, setData] = useState({
//         email: '',
//         password: ''
//     })

//     const handleChange = (event) => {
//         setData({
//             ...data, 
//             [event.target.name]: event.target.value
//         })
//     }
//     function Login(){
//         path('/login')
//     }

//     const handleSubmit= (e) =>{
//         e.preventDefault()
//         props.setUser(data);
//         path('/')
//     }

    
//   return (
//     <div className="main">
//      <div className="title">Recipe Food Forum</div>
//      <form onSubmit={(e) => handleSubmit(e)}>
//         <label htmlFor="email">Email</label>
//         <input
//          type="email"
//          placeholder="email"
//          id="email"
//          name="email"
//          onChange={handleChange}
//          />
//          <label htmlFor="password">Password</label>
//          <input
//           type="password"
//           placeholder="password"
//           name="password"
//           id="password"
//           onChange={handleChange}
//           />
//           <label>Confirm</label>
//         <input
//           type="password"
//           placeholder="password"
//           name="confirm"
//           onChange={handleChange}
//           required
//         />
        

//     <button type="submit" className="signup">Signup</button>
//     <button className="signin" onClick={Login}>Log In</button>
//     </form>
//     <Footer/>
//     </div>
//   );
// }

// export default Signup;
