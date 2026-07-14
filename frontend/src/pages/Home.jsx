import "./Home.css";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get("/jobs");
                setJobs(response.data.jobs);
            } catch (error) {
                console.log(error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>

            {/* Hero Section */}
            <Hero />

            <hr />

            {/* Latest Jobs */}
            <section className="latest-jobs">

    <h2>
        Latest Opportunities
    </h2>


    <div className="job-grid">

        {jobs.slice(0,3).map((job)=>(
            
            <div className="job-card" key={job._id}>

                <h3>
                    {job.title}
                </h3>


                <p>
                    🏢 {job.company}
                </p>


                <p>
                    📍 {job.location}
                </p>


                <p>
                    💰 ${job.salary}
                </p>


                <Link to={`/jobs/${job._id}`}>
                    View Details →
                </Link>


            </div>

        ))}

    </div>


</section>
            <hr />

            {/* Categories */}
            <section>

                <h2>Popular Categories</h2>

               <div className="category-grid">

                <div className="category-card">
                    <span>💻</span>
                     <h3>Software Development</h3>
                </div>


                <div className="category-card">
                      <span>📢</span>
                      <h3>Marketing</h3>
                </div>


                 <div className="category-card">
                    <span>💰</span>
                    <h3>Finance</h3>
                </div>


                <div className="category-card">
                    <span>🎨</span>
                     <h3>Design</h3>
                </div>


                 <div className="category-card">
                    <span>👥</span>
                    <h3>Human Resources</h3>
                </div>

</div>

            </section>

            <hr />

            {/* Why Choose Us */}
            <section className="why-section">

                <h2>Why Choose Us?</h2>
                <div className="feature-grid">


                <div className="feature-card">

                <h3>🔒 Verified Jobs</h3>

                <p>
                Safe and trusted job opportunities.
                </p>

                </div>



                 <div className="feature-card">

                <h3>⚡ Easy Applications</h3>

                 <p>
                Apply for jobs quickly and easily.
                </p>

                 </div>



                <div className="feature-card">

                <h3>🏢 Trusted Companies</h3>

                <p>
                Connect with reliable employers.
                </p>

                 </div>



                <div className="feature-card">

                <h3>🚀 Fast Platform</h3>

                <p>
                Smooth and secure experience.
                </p>

                </div>


        </div>



            </section>

            <hr />

            {/* Statistics */}
            <section>

                <h2>Our Statistics</h2>

                <div className="stats-grid">


                 <div>
                 <h2>10,000+</h2>
                 <p>Users</p>
                 </div>


                 <div>
                 <h2>5,000+</h2>
                 <p>Jobs Posted</p>
                 </div>


                <div>
                <h2>1,000+</h2>
                <p>Companies</p>
                </div>


</div>

            </section>

        </div>
    );
}

export default Home;