import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import Footer from "../../components/Footer/Footer";
import '../../index.css'

export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* <div className="header">Recipe Food Forum</div> */}

      {!showForm ? (
        <div className="login-page">
            <div className="title">Recipe Food Forum</div>
          <LogInForm setUser={setUser} showForm={showForm} setShowForm={setShowForm}/>
          <Footer/>
        </div>
      ) : (
        <div className="login-page">
            <div className="title">Recipe Food Forum</div>
          <SignUpForm setUser={setUser} showForm={showForm} setShowForm={setShowForm}/>
          <Footer/>
        </div>
      )}
    </>
  )
}












