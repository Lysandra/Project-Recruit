const router = require("express").Router();
const recruiterRoutes = require("./recruiters");

// Recruiter routes
router.use("/recruiters", recruiterRoutes);

module.exports = router;
