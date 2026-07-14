const Application = require("../models/Application");

const applyJob = async (req, res) => {
    try {
        const { jobId } = req.params;

        const existingApplication = await Application.findOne({
            user: req.user.id,
            job: jobId,
        });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job.",
            });
        }

        const application = await Application.create({
            user: req.user.id,
            job: jobId,
        });

        res.status(201).json({
            message: "Application submitted successfully!",
            application,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


const getMyApplications = async (req, res) => {
    try {
        const applications = await Application.find({
            user: req.user.id,
        }).populate("job");

        res.status(200).json({
            applications,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


module.exports = {
    applyJob,
    getMyApplications,
};