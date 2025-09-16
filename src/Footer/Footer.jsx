import "./Footer.css"
import logo from '../assets/logo.jpg';

export default function Footer() {
    return (
        <footer className="footer">
            <div class="container">
                <div class="grid">
                    <div class="club-info">
                        <div class="logo">
                            <div class="logo-circle">
                                <img src={logo} alt="PIC Logo" class="logo-image" />
                            </div>
                            <div class="logo-text">
                                <span class="logo-title">PIC</span>
                                <span class="logo-subtitle">Project & Innovation Club</span>
                            </div>
                        </div>
                        <p class="description">
                            Empowering innovators to turn bold ideas into impactful solutions. 
                            Where curiosity sparks creation and dreams become reality.
                        </p>
                        <div class="address">
                            📍 PCCOER Campus, Room 301
                        </div>
                    </div>

                    <div class="quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="resources">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Innovation Guide</a></li>
                            <li><a href="#">Project Portal</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Alumni Network</a></li>
                        </ul>
                    </div>

                    <div class="contact-social">
                        <h3>Connect With Us</h3>
                        <p>Stay updated with our latest events and announcements</p>
                        <a href="mailto:info@pic-club.edu">info@pic-club.edu</a>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-github">&nbsp;</i></a>
                            <a href="#"><i class="fab fa-linkedin">&nbsp;</i></a>
                            <a href="#"><i class="fab fa-instagram">&nbsp;</i></a>
                            <a href="mailto:info@pic-club.edu"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>

                <div class="bottom-bar">
                    <p>© 2025 PIC - Project & Innovation Club. All rights reserved.</p>
                    <div class="policy-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Code of Conduct</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}