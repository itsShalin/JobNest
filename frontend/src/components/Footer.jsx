import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2>🍫 JobNest</h2>

                    <p>
                        Connecting ambitious people with exceptional
                        opportunities around the world.
                    </p>

                    <div className="social-icons">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>

                    <Link to="/jobs">Jobs</Link>

                    <Link to="/about">About</Link>

                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-about">
                    <h3>About</h3>

                    <p>
                        JobNest helps talented professionals discover meaningful
                        careers while empowering companies to find exceptional
                        talent.
                    </p>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>

                    <p>📧 support@jobnest.com</p>

                    <p>☎ +880 1234-567890</p>

                    <p>📍 Sylhet, Bangladesh</p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 JobNest • Crafted with ❤️ for future careers.
            </div>
        </footer>
    );
}

export default Footer;
