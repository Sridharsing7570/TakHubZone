const { Router } = require("express");
const router = Router();
const jobController = require("../Controllers/jobsController");

router.post("/create", jobController.createJobs);

router.get("/get", jobController.getJobs);

router.put("/update/:jobId", jobController.updateJobs);

router.delete("/delete/:jobId", jobController.deleteJob);
