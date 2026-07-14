import "./About.css";
import { Link } from "react-router-dom";

function About() {

    return (

        <div className="about-page">

            {/* Hero */}

            <section className="about-hero">

                <h1>Building Careers. Inspiring Futures.</h1>

                <p>

                    Every great career begins with one opportunity.
                    JobNest connects talented professionals with
                    companies looking for exceptional people.

                </p>

                <Link to="/jobs">

                    Explore Jobs

                </Link>

            </section>


            {/* Story */}

            <section className="story-section">

                <div>

                    <h2>Our Story</h2>

                    <p>

                        JobNest was created with one simple vision —
                        making job searching faster, easier and more
                        transparent for everyone.

                        Whether you're a student searching for your
                        first internship or an experienced professional
                        looking for your next challenge, our platform
                        helps connect talent with opportunity.

                    </p>

                </div>


                <div>

                    <h2>Our Mission</h2>

                    <p>

                        We believe finding a career shouldn't be
                        stressful. Our mission is to create a reliable
                        platform where companies discover exceptional
                        talent and professionals find meaningful work.

                    </p>

                </div>

            </section>


            {/* Timeline */}

            <section>

                <h2>Our Journey</h2>

                <div className="timeline">

                    <div className="timeline-card">

                        🚀

                        <h3>2024</h3>

                        <p>JobNest was founded.</p>

                    </div>

                    <div className="timeline-card">

                        🏢

                        <h3>2025</h3>

                        <p>1,000+ companies joined.</p>

                    </div>

                    <div className="timeline-card">

                        👨‍💻

                        <h3>2026</h3>

                        <p>10,000+ professionals connected.</p>

                    </div>

                </div>

            </section>


            {/* Values */}

            <section>

                <h2>Our Core Values</h2>

                <div className="values-grid">

                    <div className="value-card">

                        🤝

                        <h3>Trust</h3>

                        <p>
                            Every opportunity starts with trust.
                        </p>

                    </div>


                    <div className="value-card">

                        🌍

                        <h3>Opportunity</h3>

                        <p>
                            Helping everyone discover new possibilities.
                        </p>

                    </div>


                    <div className="value-card">

                        💡

                        <h3>Innovation</h3>

                        <p>
                            Smarter hiring through better technology.
                        </p>

                    </div>


                    <div className="value-card">

                        🚀

                        <h3>Growth</h3>

                        <p>
                            Empowering careers to reach new heights.
                        </p>

                    </div>

                </div>

            </section>


            {/* Vision */}

            <section className="vision">

                <h2>Our Vision</h2>

                <p>

                    To become one of the world's most trusted career
                    platforms where employers and talented professionals
                    connect without barriers.

                </p>

            </section>


            {/* CTA */}

            <section className="about-cta">

                <h2>

                    Ready to Begin Your Journey?

                </h2>

                <Link to="/jobs">

                    Browse Opportunities

                </Link>

            </section>

        </div>

    );

}

export default About;