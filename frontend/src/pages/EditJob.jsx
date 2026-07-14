import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import "./EditJob.css";


function EditJob() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {

        const fetchJob = async () => {

            try {

                const response = await api.get(`/jobs/${id}`);

                const job = response.data.job;

                setTitle(job.title);
                setCompany(job.company);
                setLocation(job.location);
                setSalary(job.salary);
                setDescription(job.description);


            } catch(error){

                console.log(error.response?.data);

            }

        };


        fetchJob();


    }, [id]);




    const handleUpdateJob = async () => {

        try {

            await api.put(`/jobs/${id}`, {

                title,
                company,
                location,
                salary,
                description,

            });


            alert("Job updated successfully!");

            navigate("/my-jobs");


        } catch(error){

            console.log(error.response?.data);

        }

    };



    return (

        <div className="edit-job-page">


            <div className="edit-job-card">


                <div className="edit-job-header">

                    <h1>
                        ✏️ Edit Job
                    </h1>

                    <p>
                        Update your job posting details
                    </p>

                </div>



                <div className="edit-job-form">


                    <label>
                        Job Title
                    </label>

                    <input
                        className="edit-job-input"
                        type="text"
                        value={title}
                        placeholder="Enter job title"
                        onChange={(e)=>setTitle(e.target.value)}
                    />



                    <label>
                        Company Name
                    </label>

                    <input
                        className="edit-job-input"
                        type="text"
                        value={company}
                        placeholder="Enter company name"
                        onChange={(e)=>setCompany(e.target.value)}
                    />



                    <label>
                        Location
                    </label>

                    <input
                        className="edit-job-input"
                        type="text"
                        value={location}
                        placeholder="Enter location"
                        onChange={(e)=>setLocation(e.target.value)}
                    />



                    <label>
                        Salary
                    </label>

                    <input
                        className="edit-job-input"
                        type="number"
                        value={salary}
                        placeholder="Enter salary"
                        onChange={(e)=>setSalary(e.target.value)}
                    />



                    <label>
                        Job Description
                    </label>

                    <textarea
                        className="edit-job-input edit-job-textarea"
                        value={description}
                        placeholder="Describe the job role..."
                        onChange={(e)=>setDescription(e.target.value)}
                    />



                    <button
                        className="update-job-btn"
                        onClick={handleUpdateJob}
                    >
                        💾 Update Job
                    </button>


                </div>


            </div>


        </div>

    );

}


export default EditJob;