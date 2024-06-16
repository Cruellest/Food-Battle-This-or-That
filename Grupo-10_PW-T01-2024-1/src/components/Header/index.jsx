import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Header = () => {
  return (
    <header id="header">
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid " id="nav-background">
                    <a class="navbar-brand" href="#"><img class="navbar-brand" src='../src/assets/logo.svg'/></a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="bi bi-list"></i></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <form class="d-flex justify-content-center " role="search">
                        <input class="form-control me-2 justify-content-center" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-light align-center" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Categories">Categories</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/Login" aria-current="page">Sign in/Login</a>
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