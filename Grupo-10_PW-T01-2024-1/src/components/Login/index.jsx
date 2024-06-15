import React, {useState} from 'react';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setLoginMessage('Login successful!');
        // Redirect or navigate to a protected area after successful login
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginMessage(`Error: ${errorCode} - ${errorMessage}`);
      }
    };
  
    return (
      <div>
        <div className="container text-center" id="image">
          <img id="tittleLogin" src="../src/assets/tittleBlack.png" alt="Login Title" />
        </div>
        <div className="container-sm" id="login">
          <div className="container-sm text-center" id="login-content">
            <div id="tittleText">LOGIN</div>
            <div className="row" id="row-landing">
              <div className="container text-center" id="loginForm">
                Email
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row" id="row-landing">
              <div className="container text-center">
                Senha (Password)
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  aria-label="Senha"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row" id="row-landing">
              <div className="container text-center">
                <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' }} onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
            {loginMessage && <p className="login-message">{loginMessage}</p>}
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;