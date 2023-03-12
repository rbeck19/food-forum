import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import '../../index.css'

export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* <div className="header">Recipe Food Forum</div> */}

      {!showForm ? (
        <div className="login-page">
          <LogInForm setUser={setUser} showForm={showForm} setShowForm={setShowForm}/>
          
        </div>
      ) : (
        <div className="login-page">
          <SignUpForm setUser={setUser} showForm={showForm} setShowForm={setShowForm}/>
        </div>
      )}
    </>
  )
}












