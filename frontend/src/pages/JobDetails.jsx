import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./JobDetails.css";

function JobDetails() {

    const { id } = useParams();

    const [job, setJob] = useState(null);

    useEffect(() => {

        const fetchJob = async () => {

            try {

                const response = await api.get(`/jobs/${id}`);

                setJob(response.data.job);

            } catch (error) {

                console.log(error);

            }

        };

        fetchJob();

    }, [id]);



    const handleApply = async () => {

        try {

            const response = await api.post(`/applications/${id}`);

            alert(response.data.message);

        } catch (error) {

            alert(error.response?.data?.message);

        }

    };



    if (!job) {

        return (
            <div className="job-loading">
                Loading Job...
            </div>
        );

    }



    return (

        <div className="job-details-page">

            <div className="hero-section">

                <h1>🍫 Job Details</h1>

                <p>
                    Find your next opportunity and take
                    the next step in your career.
                </p>

            </div>



            <div className="job-card">

                <div className="job-title-area">

                    <h2>{job.title}</h2>

                    <span className="salary-badge">
                        💰 ${job.salary}
                    </span>

                </div>


                <h3>
                    🏢 {job.company}
                </h3>



                <div className="job-tags">

                    <span>
                        📍 {job.location}
                    </span>

                    <span>
                        💼 {job.jobType || "Full Time"}
                    </span>

                    <span>
                        🏷️ {job.category || "General"}
                    </span>

                </div>


            </div>





            <div className="content-grid">

                <div className="info-card">

                    <h2>
                        📝 About This Role
                    </h2>

                    <p>

                        {job.description}

                    </p>

                </div>





                <div className="info-card">

                    <h2>
                        ✅ Requirements
                    </h2>

                    <p>

                        {job.requirements}

                    </p>

                </div>





                <div className="info-card">

                    <h2>
                        🌟 Why You'll Love This Role
                    </h2>

                    <ul>

                        <li>🤝 Collaborative work environment</li>

                        <li>📈 Excellent career growth</li>

                        <li>🌍 Flexible working culture</li>

                    </ul>

                </div>





                <div className="info-card">

                    <h2>
                        🍫 Ready to Apply?
                    </h2>

                    <p>

                        Every successful career starts
                        with one application.

                    </p>

                    <button
                        className="apply-btn"
                        onClick={handleApply}
                    >
                        🚀 Apply Now
                    </button>

                </div>

            </div>



        </div>

    );

}

export default JobDetails;