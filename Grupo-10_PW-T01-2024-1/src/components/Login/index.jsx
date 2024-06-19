import React, {useState} from 'react';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom'; // for redirection
import { useAuth } from '../../contexts/AuthContext'; // Import the context



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate("");
    const { setUser } = useAuth();
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user); // Set the user in context
        setLoginMessage('Login successful!');
        navigate("/");
        

      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginMessage(`Error: ${errorCode} - ${errorMessage}`);
      }
    };
  
    return (
      <div>
        <div className="container text-center" id="image">
          <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
        </div>
        <div className="container-sm" id="login">
          <div className="container-sm text-center" id="login-content">
            <div id="tittle-text">LOGIN</div>
              <div className="container text-center" id="login-form">
                E-mail
              </div>
              <center><div className="input-group mb-3" id="input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div></center>
              <div className="container text-center" id="login-form">
                Password
              </div>
              <center><div className="input-group mb-3" id="input">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div></center>
              <div className="container text-center">
              Don't have an account?
              <a id="signin-button" href='/Sign-In'> Sign-in </a>
              </div>
              <div className="container text-center" id="login-form">
                <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' }} href='/' onClick={handleLogin}>
                  LOGIN
                </button>
              </div>
            {loginMessage && <p className="login-message">{loginMessage}</p>}
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;