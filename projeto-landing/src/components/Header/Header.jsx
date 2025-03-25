import React from "react";
import './Header.css'
import Button from "../Button/Button";

export default function Header() {
    return (
        <header>
            <nav id="navbar">
                <div id="nav-logo">
                    logo
                </div>
                <ul id="nav-list">
                    <li className="nav-item active">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About us</a>
                    </li>
                </ul>
                <Button texto='Apertar'/>
            </nav>

            <nav id="nav-phone">
                <div id="nav-phone-logo">
                    logo
                </div>
                <button id="menu">menu</button>
            </nav>
        </header>
    )
}