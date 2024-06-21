import React, { useState } from 'react';
import { auth, firestore } from '../../services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (name === '') {
      setRegisterMessage('Please enter a name');
      return;
    }

    if (password !== confirmPassword) {
      setRegisterMessage('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created:', user);

      await setDoc(doc(firestore, "Users_Names", user.uid), {
        name: name
      });

      setRegisterMessage('Registration successful! Please login.');
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error.message);
      setRegisterMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <div className="container text-center" id="image">
        <img id="tittle-all" src="/src/assets/tittleBlack.png" alt="Login Title" />
      </div>
      <div className="container-sm" id="signin">
        <div className="container-sm text-center" id="signin-content">
          <div id="tittle-text">SIGN-IN</div>
          <div className="container text-center" id="signinForm">
            Name
          </div>
          <center>
            <div className="input-group mb-3" id="input">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </center>
          <div className="container text-center" id="signinForm">
            E-mail
          </div>
          <center>
            <div className="input-group mb-3" id="input">
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
          </center>
          <div className="container text-center" id="signinForm">
            Password
          </div>
          <center>
            <div className="input-group mb-3" id="input">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </center>
          <div className="container text-center" id="signinForm">
            Confirm your password
          </div>
          <center>
            <div className="input-group mb-3" id="input">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </center>
          <div className="container text-center" id="signinForm">
            <button
              type="button"
              className="btn btn-warning"
              style={{ fontWeight: 'bolder' }}
              onClick={handleRegister}
            >
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
