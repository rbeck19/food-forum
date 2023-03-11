import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    const [showForm, setShowForm] = useState(false);

    return(
        <div className="main1">
        <div className="title">Recipe Food Forum</div>
  
          {showForm ? (
          <div className="hello">
            <LogInForm setUser={setUser} />
            <div className="toggle-text">
            Need to make an account? <br></br>Sign up {" "}
            <div className="toggle-text" onClick={() => setShowForm(!showForm)}>
              HERE
            </div>
          </div>
          </div>
          ) : (
          <div className="hello">
            <SignUpForm setUser={setUser} />
            <div className="toggle-text">
            Already have an account? {" "}
            <div className="toggle-text" onClick={() => setShowForm(!showForm)}>
              LOG-IN
            </div>
          </div>
          </div>
          )}
        </div>
    )
}












