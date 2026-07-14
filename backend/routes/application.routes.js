const express = require("express");
const { applyJob, getMyApplications} = require("../controllers/application.controller");
const protect = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/:jobId", protect, applyJob);
router.get("/my-applications", protect, getMyApplications);

module.exports = router;