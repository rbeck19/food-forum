import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import Footer from "../../components/Footer/Footer";
import '../../index.css'

export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {!showForm ? (
        <div className="login-page">
          <div className="auth-contents">
            <div className="title">Recipe Food Forum</div>

            <div className="form-container">
              <LogInForm setUser={setUser} showForm={showForm} setShowForm={setShowForm} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="login-page">
          <div className="auth-contents">
            <div className="title">Recipe Food Forum</div>

            <div className="form-container">
              <SignUpForm setUser={setUser} showForm={showForm} setShowForm={setShowForm} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}












