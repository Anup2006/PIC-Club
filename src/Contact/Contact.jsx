import { useState } from "react";
import "./Contact.css"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Thank you for your message! We'll get back to you soon.");
    };    

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <span className="title">Get In Touch</span>
                    <p className="subtitle"> 
                        Have an innovative project idea, want to join our community, or looking to collaborate? 
                        Let's turn your curiosity into creation together!
                    </p>
                </div>
                <div className="contact-grid">
                    <div className="contact-form">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title"> 
                                    <i id="icon" class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;Send us a Message
                                </h2>
                            </div>
                            <div className="card-content">
                                <form className="form" onSubmit={handleSubmit} >
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label for="name" className="name">Full Name *</label>
                                            <input id="name" value={formData.name} name="name" onChange={handleInputChange} type="text" required placeholder="Your full name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email" className="email">Email Address *</label>
                                            <input id="email" value={formData.email} name="email" onChange={handleInputChange} type="email" required placeholder="your.email@example.com" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="subject" className="subject">Subject *</label>
                                        <input id="subject"  value={formData.subject} name="subject" onChange={handleInputChange} type="text" required placeholder="What's this about?" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message" className="message">Message *</label>
                                        <textarea id="message"  value={formData.message} onChange={handleInputChange} name="message" required placeholder="Tell us more about your inquiry..."></textarea>
                                    </div>
                                    <button type="submit" className="btn-submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info">
                        <div className="card2">
                            <div className="card-header2">
                                <h2 className="card-title2">Contact Information</h2>
                            </div>
                            <div className="card-content">
                                <div className="info-item">
                                    <i id="icon2" className="fa-solid fa-envelope"></i>
                                    <div id="info-item">
                                        <h4 className="info-title">Email</h4>
                                        <p className="info-detail">support@example.com</p>
                                        <p className="sub">For project ideas and inquiriess</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i id="icon2" className="fa-solid fa-phone"></i>
                                    <div>
                                        <h4 className="info-title">Phone</h4>
                                        <p className="info-detail">+91 0000000000</p>
                                        <p className="sub">Available during innovation hours</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i id="icon2" className="fa-solid fa-location-dot"></i>
                                    <div>
                                        <h4 className="info-title">Location</h4>
                                        <p className="info-detail">PCCOER Campus, Room 301</p>
                                        <p className="sub">Pimpri Chinchwad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </> 
    );
}