import Home from "../components/Home";
import Login from "../components/Login";
import SignIn from "../components/Sign-In";
import General from "../components/Categories";
import Play from "../components/Play";
import SearchResults from '../components/SearchResults';
import Ranking from "../components/Ranking";
import NotFound from "../components/NotFound";
import React from "react";
import { Routes, Route } from 'react-router-dom';

function RouteApp() {
    
    return(
        <Routes>
              
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign-In" element={<SignIn />} />
            <Route path="/Categories" element={<General />} />
            <Route path="/Play" element={<Play />} />
            <Route path="/Play/:category" element={<Play />} />
            <Route path="/Ranking" element={<Ranking />} />
            <Route path="/search/:searchTerm" element={<SearchResults />} />
            <Route path ="/*" element={<NotFound/>} />

        </Routes>
    );

}

export default RouteApp;