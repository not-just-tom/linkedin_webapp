import React from "react"
import { Link } from "react-router-dom"


export function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-links">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/About">
                    <button>About</button>
                </Link>
                <Link to="/Projects">
                    <button>Projects</button>
                </Link>
            </ul>
        </div>
        
    );
}

