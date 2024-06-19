import React from 'react';
import '../styles/Footer.css';
import logo from '../images/logo.jpeg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="left">KnightWatch</span>
                <span className="separator">|</span>
                <span className="rights">All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
