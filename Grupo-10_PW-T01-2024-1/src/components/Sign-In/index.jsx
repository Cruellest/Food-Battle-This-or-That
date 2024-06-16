import React, {useState} from 'react';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';


function SignIn() {
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
          <img id="tittleAll" src="../src/assets/tittleBlack.png" alt="Login Title" />
        </div>
        <div className="container-sm" id="signin">
          <div className="container-sm text-center" id="signin-content">
            <div id="tittleText">SIGN-IN</div>
            <div className="container text-center" id="signin-form">
                Name
              </div>
              <center><div className="input-group mb-3" id="input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div></center>
              <div className="container text-center" id="signin-form">
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
              <div className="container text-center" id="signin-form">
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
              <div className="container text-center" id="signin-form">
              Confirm your password
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
              <div className="container text-center" id="signin-form">
                <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' }} href='/' onClick={handleLogin}>
                  SIGN-IN
                </button>
              </div>
            {loginMessage && <p className="login-message">{loginMessage}</p>}
          </div>
        </div>
      </div>
    );
  }
  
  export default SignIn;