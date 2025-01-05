import { Link } from 'react-router-dom';
import './contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-heading">
                <h1>Contact Us</h1>
                <p>We're here to assist you. Feel free to reach out!</p>
            </div>

            {/* Information Section */}
            <div className="info-section">
                <div className="info-box">
                    <h3>📍 Visit Us</h3>
                    <p>123 Beachside Blvd, Ocean View, CA</p>
                </div>
                <div className="info-box">
                    <h3>📞 Call Us</h3>
                    <p>+1 234 567 890</p>
                </div>
                <div className="info-box">
                    <h3>📧 Email Us</h3>
                    <p>support@beachresort.com</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="form-container">
                <form className="form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="tel" placeholder="Your Phone" required />
                    <textarea placeholder="Your Message" rows={5} required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            {/* Map Section */}
            <div className="map-container">
                <h2>Find Us Here</h2>
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.01230943975!2d77.54137159410617!3d8.101166864534473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed7fb1fb4bb9%3A0x61f19aabc22fceb3!2sPHOENIX%20BEACH%20RESORT!5e0!3m2!1sen!2sin!4v1736092954931!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
