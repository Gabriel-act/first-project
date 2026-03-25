import React from 'react'
import logoImg from '../../assets/Images/logo.png'
import "./styles.css"

export function Navbar() {
    return(
        <header>
            <nav id="navbar">
                <div className="nav-brand">
                    <img id="image" src={logoImg} alt="Error" />
                    <h1>Space Fligt News</h1>
                </div>

                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Trending</a></li>
                    <li><a href="/">Categories</a></li>
                    <li><a href="/">About us</a></li>
                </ul>
            </nav>
        </header>
    )
}
