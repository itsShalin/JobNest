import { useState } from 'react';
import api from '../services/api';
import './CreateJob.css';

function CreateJob() {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');

    const [category, setCategory] = useState('');
    const [jobType, setJobType] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleCreateJob = async () => {
        try {
            const response = await api.post('/jobs/create', {
                title,
                company,
                location,
                category,
                jobType,
                salary,
                description,
                requirements,
                deadline,
            });

            console.log(response.data);

            alert('Job created successfully!');

            setTitle('');
            setCompany('');
            setLocation('');
            setSalary('');
            setDescription('');
            setRequirements('');
            setCategory('');
            setJobType('');
            setDeadline('');
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <div className="create-job-page">
            <div className="job-form-card">
                <h1>🍫 Create Job</h1>

                <p className="subtitle">
                    Find the perfect candidate for your company
                </p>

                <div className="form-grid">
                    <input
                        className="job-input"
                        placeholder="Job Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        className="job-input"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />

                    <input
                        className="job-input"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <input
                        className="job-input"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <input
                        className="job-input"
                        placeholder="Job Type (Full Time/Part Time)"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    />

                    <input
                        className="job-input"
                        type="number"
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>

                <label>Deadline</label>

                <input
                    className="job-input"
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />

                <textarea
                    className="job-textarea"
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <textarea
                    className="job-textarea"
                    placeholder="Requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                />

                <button className="create-btn" onClick={handleCreateJob}>
                    Create Job 🚀
                </button>
            </div>
        </div>
    );
}

export default CreateJob;
