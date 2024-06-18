import React, { useState } from 'react';
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // for redirection
import { firestore } from '../../firebaseConnection';

    function SignIn() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [registerMessage, setRegisterMessage] = useState('');
        const navigate = useNavigate(); // Hook for redirection
      
        const handleRegister = async (e) => {
            e.preventDefault(); // Prevent default form submission behavior
        
            if (password !== confirmPassword) {
              setRegisterMessage('Passwords do not match!');
              return; // Exit function if passwords don't match
            }
        
            try {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              console.log('User created:', userCredential.user);
              setRegisterMessage('Registration successful! Please login.');
              navigate('/login'); // Redirect to login page after successful registration
            } catch (error) {
              console.error('Registration error:', error.message);
              setRegisterMessage('Registration failed. Please try again.');
            }
          };
        
    
        return (
          <div>
            <div className="container text-center" id="image">
              <img id="tittle-all" src="../src/assets/tittleBlack.png" alt="Login Title" />
            </div>
            <div className="container-sm" id="signin">
              <div className="container-sm text-center" id="signin-content">
                <div id="tittle-text">SIGN-IN</div>
                  <div className="container text-center" id="signinForm">
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
                  <div className="container text-center" id="signinForm">
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
                  <div className="container text-center" id="signinForm">
                  Confirm your password
                  </div>
                  <center><div className="input-group mb-3" id="input">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div></center>
                  <div className="container text-center" id="signinForm">
                    <button type="button" className="btn btn-warning" style={{ fontWeight: 'bolder' }} href='/' onClick={handleRegister}>
                      SIGN-IN
                    </button>
                  </div>
                {registerMessage && <p className="login-message">{registerMessage}</p>}
              </div>
            </div>
          </div>
        );
      }
      
      export default SignIn;