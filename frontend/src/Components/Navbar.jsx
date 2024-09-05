import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-links">
                <Link to="/">
                    Home
                </Link>
                
                <Link to="/About">
                    About
                </Link>
                
                <Link to="/Projects">
                    Projects
                </Link>
            </ul>
        </div>
        
    );
}

