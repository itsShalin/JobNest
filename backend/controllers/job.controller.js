const Job = require("../models/Job");

const createJob = async (req, res) => {
    try {
        const { title, company, location, category, jobType, salary, description, requirements, deadline } = req.body;

        const job = await Job.create({
          title,
          company,
          location,
          category,
          jobType,
          salary,
          description,
          requirements,
          deadline,
         postedBy: req.user.id,
});

        res.status(201).json({
            message: "Job created successfully!",
            job,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getAllJobs = async (req, res) => {
    try {


        const jobs = await Job.find().sort({ createdAt: -1 });

        res.status(200).json({
            jobs,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getJobById = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findById(id);

        res.status(200).json({
            job,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedJob = await Job.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );

        if (!updatedJob) {
            return res.status(404).json({
                message: "Job not found.",
    });
}

res.status(200).json({
    message: "Job updated successfully!",
    job: updatedJob,
});
    } catch (error){
    res.status(500).json({
        message: error.message,
    });
}
};

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params; 
        const deletedJob = await Job.findByIdAndDelete(id);

        if(!deletedJob) {
            return res.status(404).json({
                message: "job not found.",
            });
        }
        res.status(200).json({
            message: "Job deleted successfully!",
        });


    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getMyJobs = async (req, res) => {
    try {
        console.log("Current user:", req.user.id);

        const jobs = await Job.find({
            postedBy: req.user.id,
        });

        console.log("Found jobs:", jobs);
        res.status(200).json({
            jobs,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    getMyJobs,
};