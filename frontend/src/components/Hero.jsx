import { Link } from "react-router-dom";
import "./Hero.css";


function Hero(){

    return(

        <section className="hero">

            <div className="hero-content">

                <h1>
                    Find Your Dream Career
                </h1>


                <p>
                    Discover thousands of job opportunities
                    from trusted companies worldwide.
                </p>


                <div className="hero-buttons">

                    <Link to="/jobs">
                        Browse Jobs
                    </Link>


                    <Link to="/create-job">
                        Post a Job
                    </Link>

                </div>

            </div>


            <div className="hero-icon">

                💼

            </div>


        </section>

    );

}


export default Hero;