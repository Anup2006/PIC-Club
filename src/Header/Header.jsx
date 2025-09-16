import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                    <div className="logo-circle">
                        <img src={logo} alt="PIC Logo" class="logo-image" />
                    </div>
                    <div className="logo-text">
                        <span className="logo-title">Project & Innovation Club</span>
                        <span className="logo-subtitle">PCCOER</span>
                    </div>
                    </div>
                    <nav className="nav-desktop">
                        <button className="nav-button" onClick={() => scrollToSection('home')}>Home</button>
                        <button className="nav-button" onClick={() => scrollToSection('about')}>About Us</button>
                        <button className="nav-button" onClick={() => scrollToSection('events')}>Activities</button>
                        <button className="nav-button" onClick={() => scrollToSection('team')}>Roadmap</button>
                        <button className="nav-button" onClick={() => scrollToSection('contact')}>Faculty</button>
                    </nav>
                    <nav>
                        {/* Mobile Menu Button  */}
                        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
                        </button>
                    </nav>

                    {!isMobileMenuOpen && (
                    <nav className="nav-mobile">
                        <button className="nav-button" onClick={() => {scrollToSection('home'); setIsMobileMenuOpen(false);}}>Home</button>
                        <button className="nav-button" onClick={() => {scrollToSection('events'); setIsMobileMenuOpen(false);}}>Events</button>
                        <button className="nav-button" onClick={() => {scrollToSection('about'); setIsMobileMenuOpen(false);}}>About Us</button>
                        <button className="nav-button" onClick={() => {scrollToSection('team'); setIsMobileMenuOpen(false);}}>Team</button>
                        <button className="nav-button" onClick={() => {scrollToSection('contact'); setIsMobileMenuOpen(false);}}>Contact</button>
                    </nav>
                    )} 
                </div>
            </div>
        </header>
    );
}