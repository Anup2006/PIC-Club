import "./Home.css"
import Rotating from './Rotating'
import logo from '../assets/logo.jpg';

export default function Home() {
    return (
        <section id="home" >
            <div className="container">
                <div className="text-center">
                    <div className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <div className="icon-circle">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                    </div>
                    <div className="icon-polygon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12,2 22,20 2,20"/>
                        </svg>
                    </div>
                    <div className="icon-path">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div className="RotatingText"><Rotating 
                        text={["Welcome to PIC",
                            "Where Curiosity Sparks Creation",
                            "Innovation Starts Here",
                            "Transform Ideas into Reality"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        />
                    </div>
                    <div >
                        <img src={logo} alt="PIC Logo" className="logo-home" />
                    </div>
                    <p id="club-text" className="club-text">
                        <span className="text1">Project & </span> 
                        <span className="text2">Innovation Club</span>
                    </p>
                    <p id="tagline-text" className="tagline-text">"Where Curiosity Sparks Creation"</p>
                    <p id="college-text" className="college-text">Pimpri Chinchwad College of Engineering and Research </p>
                    <p className="description-text">PIC is a student-driven initiative at PCCOER aimed at cultivating a culture of hands-on project development and innovative research among students. PIC serves as a platform where creativity meets industry relevance, enabling students to transform their ideas into impactful solutions.</p>
                    <div className="buttons">
                        <button className="button1" onclick={()=>scrollToSection('about')}>Explore Our Mission <i class="fa-solid fa-arrow-right"></i></button>
                        <button className="button2" onclick={()=>scrollToSection('events')}>Join the Innovation</button>
                    </div>
                    <div className="scroll-indicator" onclick={()=>scrollToSection('events')}>
                        <div className="scroll-dot"></div>
                    </div>
                </div>
            </div>

        </section>
    );
}