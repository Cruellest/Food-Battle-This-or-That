import React, { useState } from 'react';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // for redirection
import { useAuth } from '../../contexts/AuthContext'; // Import the context
import { toast } from 'react-toastify';
import loginTitle from "../../assets/tittleBlack.png"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user); // Set the user in context
            toast.success('Login successful!');
            navigate("/");

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`Error: ${errorCode} - ${errorMessage}`);
        }
    };

    return (
        <div className="container-sm text-center">
            <div className="container text-center" id="image">
                <img id="tittle-all" src={loginTitle} alt="Login Title" />
            </div>
            <center><div className="container-sm rounded" id="login">
                <div className="container-sm text-center" id="login-content">
                    <div id="tittle-text">LOGIN</div>
                    <form onSubmit={handleLogin}>
                        <div className="container text-center" id="login-form">
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
                        <div className="container text-center" id="login-form">
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
                        <div className="container text-center" id="login-form">
                            Don't have an account?
                            <a id="signin-button" href='/Sign-In'> Sign-in </a>
                        </div>
                        <div className="container text-center" id="login-form">
                            <button type="submit" className="btn btn-warning" style={{ fontWeight: 'bolder' }}>
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </center>
        </div>
    );
}

export default Login;
