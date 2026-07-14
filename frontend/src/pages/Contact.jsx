import "./Contact.css";

function Contact() {

    return (

        <div className="contact-page">

            {/* Hero */}

            <section className="contact-hero">

                <h1>Let's Start a Conversation</h1>

                <p>

                    Have questions, feedback, or partnership ideas?
                    We'd love to hear from you.

                </p>

            </section>


            {/* Contact Section */}

            <section className="contact-container">

                {/* Left Side */}

                <div className="contact-info">

                    <h2>Contact Information</h2>

                    <div className="info-card">

                        <h3>📧 Email</h3>

                        <p>support@jobnest.com</p>

                    </div>


                    <div className="info-card">

                        <h3>☎ Phone</h3>

                        <p>+880 1234-567890</p>

                    </div>


                    <div className="info-card">

                        <h3>📍 Office</h3>

                        <p>Sylhet, Bangladesh</p>

                    </div>


                    <div className="info-card">

                        <h3>🕒 Working Hours</h3>

                        <p>Monday - Friday</p>

                        <p>9:00 AM - 6:00 PM</p>

                    </div>


                    <div className="social-links">

                        <h3>Follow Us</h3>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            🐙 GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            💼 LinkedIn
                        </a>

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            📘 Facebook
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            📸 Instagram
                        </a>

                    </div>

                </div>


                {/* Right Side */}

                <div className="contact-form">

                    <h2>Send Us a Message</h2>

                    <form>

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                        />

                        <button type="submit">

                            Send Message

                        </button>

                    </form>

                    <p className="reply-text">

                        We usually reply within 24 hours.

                    </p>


                    <div className="contact-extra">

    <h3>Why Contact Us?</h3>

    <div className="extra-item">

        <h4>💼 Career Guidance</h4>

        <p>
            Helping job seekers discover the right opportunities and build successful careers.
        </p>

    </div>

    <div className="extra-item">

        <h4>🏢 Employer Support</h4>

        <p>
            Assisting companies in finding skilled professionals quickly and efficiently.
        </p>

    </div>

    <div className="extra-item">

        <h4>🛠 Technical Assistance</h4>

        <p>
            Having trouble with JobNest? Our support team is here to help.
        </p>

    </div>

</div>

                </div>

            </section>

        </div>

    );

}

export default Contact;