import { useEffect, useState } from "react";
import api from "../services/api";
import "./MyApplications.css";


function MyApplications() {


    const [applications, setApplications] = useState([]);



    useEffect(() => {


        const fetchApplications = async () => {


            try {


                const response = await api.get(
                    "/applications/my-applications"
                );


                setApplications(response.data.applications);



            } catch(error) {


                console.log(error.response?.data);


            }


        };



        fetchApplications();



    }, []);







    return (

        <div className="applications-page">


            <h1>
                🍫 My Applications
            </h1>


            <p className="applications-subtitle">
                Track your job applications and progress
            </p>





            {
                applications.length === 0 ? (


                    <div className="empty-applications">

                        <p>
                            You haven't applied for any jobs yet.
                        </p>


                    </div>



                ) : (


                    <div className="applications-container">


                        {
                            applications.map((application)=>(



                                <div 
                                className="application-card"
                                key={application._id}
                                >



                                    <div className="application-header">


                                        <h2>
                                            {application.job.title}
                                        </h2>



                                        <span className="status">

                                            {application.status}

                                        </span>


                                    </div>





                                    <div className="application-details">


                                        <p>
                                            🏢 
                                            <strong>
                                                Company:
                                            </strong>
                                            {" "}
                                            {application.job.company}
                                        </p>



                                        <p>
                                            📍
                                            <strong>
                                                Location:
                                            </strong>
                                            {" "}
                                            {application.job.location}
                                        </p>



                                        <p>
                                            💰
                                            <strong>
                                                Salary:
                                            </strong>
                                            {" "}
                                            ${application.job.salary}
                                        </p>



                                    </div>





                                    <div className="application-footer">


                                        <span>
                                            Application Status
                                        </span>


                                        <b>
                                            {application.status}
                                        </b>


                                    </div>



                                </div>



                            ))
                        }


                    </div>


                )
            }



        </div>


    );

}


export default MyApplications;