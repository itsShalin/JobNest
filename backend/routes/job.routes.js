const express = require("express");
const { createJob, getAllJobs, getJobById, updateJob, deleteJob, getMyJobs } = require("../controllers/job.controller");
const protect = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/create", protect, createJob);
router.get("/", getAllJobs);
router.get("/my-jobs", protect, getMyJobs);
router.get("/:id", getJobById);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);
module.exports = router;