import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { user, userName, logout } = useAuth(); // Get the user, userName, and logout function from context
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    if (user) {
      return logout();
    } else {
      return;
    }
  }

  const handleLogged = async(e) => {
    if (!user){
      return navigate('/login')
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    handleLogged();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  }

  return (
    <header id="header">
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid" id="nav-background">
            <Link className="navbar-brand" to="/">
              <img className="navbar-brand" src='../src/assets/logo.svg' alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="bi bi-list"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex justify-content-center" role="search" onSubmit={handleSearch}>
                <input 
                  className="form-control me-2 justify-content-center" 
                  type="search" 
                  placeholder="Search Categories" 
                  aria-label="Search" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-light align-center" type="submit">Search</button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={user ? '/Categories': '/login'}>Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={user ? '/Ranking': '/login'}>Ranking</Link>
                </li>
                <li className="nav-item">
                {user ? 
                (<Link className="nav-link active user-link" onClick={handleLogout} aria-current="page">{userName ? userName : 'Loading...'}</Link>) : 
                (<Link className="nav-link active" to="/Login" aria-current="page">Sign in/Login</Link> )}
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
