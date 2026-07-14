import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './MyJobs.css';

function MyJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchMyJobs = async () => {
            try {
                const response = await api.get('/jobs/my-jobs');

                setJobs(response.data.jobs);
            } catch (error) {
                console.log(error.response?.data);
            }
        };

        fetchMyJobs();
    }, []);

    const handleDeleteJob = async (id) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this job?'
        );

        if (!confirmDelete) return;

        try {
            await api.delete(`/jobs/${id}`);

            setJobs(jobs.filter((job) => job._id !== id));

            alert('Job deleted successfully!');
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <div className="my-jobs-page">
            <h1>🍫 My Job Posts</h1>

            <p className="jobs-subtitle">Manage your posted opportunities</p>

            {jobs.length === 0 ? (
                <div className="empty-box">
                    <p>No jobs posted yet.</p>
                </div>
            ) : (
                <div className="jobs-container">
                    {jobs.map((job) => {
                        console.log(job);

                        return (
                            <div className="job-card" key={job._id}>
                                <div className="job-header">
                                    <h2>{job.title}</h2>

                                    <span className="salary">
                                        ${job.salary}
                                    </span>
                                </div>

                                <h3>🏢 {job.company}</h3>

                                <div className="job-info">
                                    <p>📍 {job.location}</p>

                                    <p>💼 {job.jobType || 'Not specified'}</p>

                                    <p>🏷️ {job.category || 'Not specified'}</p>
                                </div>

                                <div className="job-actions">
                                    <Link to={`/edit-job/${job._id}`}>
                                        <button className="edit-btn">
                                            ✏ Edit
                                        </button>
                                    </Link>

                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteJob(job._id)}
                                    >
                                        🗑 Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default MyJobs;
