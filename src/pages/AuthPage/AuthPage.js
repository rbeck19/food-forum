import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({ setUser }) {
    const [showForm, setShowForm] = useState(false);

    return(
        <div className="main">
        <div className="title">Recipe Food Forum</div>
  
          {showForm ? (
          <>
            <LogInForm setUser={setUser} />
            <p class="toggle-text">
            Need to make an account? <br></br>Sign up {" "}
            <span class="toggle-text" onClick={() => setShowForm(!showForm)}>
              HERE
            </span>
          </p>
          </>
          ) : (
          <>
            <SignUpForm setUser={setUser} />
            <p class="toggle-text">
            Already have an account? {" "}
            <span class="toggle-text" onClick={() => setShowForm(!showForm)}>
              LOG-IN
            </span>
          </p>
          </>
          )}
        </div>
    )
}












