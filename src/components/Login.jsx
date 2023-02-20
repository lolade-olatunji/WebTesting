import React, { useCallback, useContext, useState } from 'react';
import { UserContext } from "./UserContext";
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
//import PasswordInput from "./passwordInput";

let timeoutHander = null
export default function Login() {

  const [user, setUser] = useContext(UserContext);
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const navigate=useNavigate()

  const handeAutoLogout = useCallback(() => {
     navigate('/')
     clearTimeout(timeoutHander)
  }, [navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
     setUser({ emailAddress: "paul@moneeyapp.com", password: "Lolade" });
    if(user.emailAddress === email && user.password === password){
      navigate("/Dashboard")
    }
    else{
      alert("invalid credentials")
    }

    timeoutHander = setTimeout(handeAutoLogout, 120000)
  };



   return (
        <section className="Login-container">
            <div className="Login-section">
              <div className="login-heading">
                <h3>Login to your dashboard</h3>
                <p>Provide details to login to your account</p>
              </div>
              <div className="form-section">
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                   <label class="form-label" for="email">Email:</label>
                   <input
                    class="form-input" 
                    type="email" 
                    placeholder="Cokitchen222@gmail.co" 
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                     }
                     required
                   />
                  </div>
                  <div className="form-control">
                   <label class="form-label" for="Password">Password:</label>
                   <input 
                   class="form-input" 
                    type="password" 
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                     }
                     required
                   />
                  </div>
                    <button type="sumbit" class="log-button">Log in</button>
               
                </form>
              </div>
            </div>
        </section>
        );
    }