import './Jobs.css';

import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get('/jobs');
                setJobs(response.data.jobs);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory = category ? job.category === category : true;

        return matchesSearch && matchesCategory;
    });

    if (loading) {
    return (
        <div className="jobs-page">
            <div className="jobs-hero">
                <h1>🍫 Explore Opportunities</h1>

                <p>
                    Discover premium career opportunities from companies around
                    the world.
                </p>
            </div>

            <div className="filter-bar">
                <div className="skeleton-input"></div>
                <div className="skeleton-dropdown"></div>
            </div>

            <div className="jobs-grid">
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
                <div className="skeleton-card"></div>
            </div>
        </div>
    );
}

    return (
        <div className="jobs-page">
            <div className="jobs-hero">
                <h1>🍫 Explore Opportunities</h1>

                <p>
                    Discover premium career opportunities from companies around
                    the world.
                </p>
            </div>

            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="🔍 Search by job title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="category-dropdown">
                    <button
                        className="category-btn"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                    >
                        {category || 'All Categories'}
                        <span>⌄</span>
                    </button>

                    {categoryOpen && (
                        <div className="category-menu">
                            <button
                                onClick={() => {
                                    setCategory('');
                                    setCategoryOpen(false);
                                }}
                            >
                                All Categories
                            </button>

                            <button
                                onClick={() => {
                                    setCategory('Software');
                                    setCategoryOpen(false);
                                }}
                            >
                                Software
                            </button>

                            <button
                                onClick={() => {
                                    setCategory('Marketing');
                                    setCategoryOpen(false);
                                }}
                            >
                                Marketing
                            </button>

                            <button
                                onClick={() => {
                                    setCategory('Design');
                                    setCategoryOpen(false);
                                }}
                            >
                                Design
                            </button>

                            <button
                                onClick={() => {
                                    setCategory('Finance');
                                    setCategoryOpen(false);
                                }}
                            >
                                Finance
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="jobs-grid">
                {filteredJobs.map((job) => (
                    <div className="job-card" key={job._id}>
                        <div className="job-top">
                            <div>
                                <h2>{job.title}</h2>

                                <h3>🏢 {job.company}</h3>
                            </div>

                            <span className="salary-badge">
                                💰 ${job.salary}
                            </span>
                        </div>

                        <div className="job-tags">
                            <span>📍 {job.location}</span>

                            <span>💼 {job.jobType || 'Full Time'}</span>

                            <span>🏷️ {job.category || 'General'}</span>
                        </div>

                        <p className="deadline">
                            📅 Apply before{' '}
                            {job.deadline
                                ? job.deadline.substring(0, 10)
                                : 'Not specified'}
                        </p>

                        <Link className="details-btn" to={`/jobs/${job._id}`}>
                            🚀 View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
