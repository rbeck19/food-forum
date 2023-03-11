import { useState } from 'react';
import Login from "../components/Login";
import Signup from '../components/Signup';

export default function AuthPage({ setUser }) {
    const [showForm, setShowForm] = useState(false);
  
    return (
      <>
        <div className="auth-page-passport-shape">
          <h1>PASSPORT</h1>
  
          {showForm ? (
          <>
            <Login setUser={setUser} />
            <p>
            Need to make an account? <br></br>Sign up {" "}
            <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
              <a href="#">here</a>
            </span>
          </p>
          </>
          ) : (
          <>
            <Signup setUser={setUser} />
            <p>
            Already have an account? {" "}
            <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
              <a href="#">Login</a>
            </span>
          </p>
          </>
          )}
        </div>
      </>
    );
  }