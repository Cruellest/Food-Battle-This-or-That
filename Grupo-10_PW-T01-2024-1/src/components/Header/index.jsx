import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useAuth } from '../../AuthContext';

const Header = () => {
  const { user } = useAuth();

  return (
    <header id="header">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" id="nav-background">
            <Link className="navbar-brand" to="/"><img className="navbar-brand" src='../src/assets/logo.svg'/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="bi bi-list"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex justify-content-center" role="search">
                <input className="form-control me-2 justify-content-center" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-light align-center" type="submit">Search</button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Categories">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Login" aria-current="page">
                    {user ? user.email : 'Sign in/Login'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
