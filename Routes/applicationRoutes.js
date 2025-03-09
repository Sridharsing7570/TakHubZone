const { Router } = require("express");
const router = Router();
const applicationController = require("../Controllers/applicationController");

router.post("/apply", applicationController.applyJob);

router.get("/fetched", applicationController.getApplications);

router.put("/update", applicationController.updateApplicationStatus);

router.delete("/withdraw", applicationController.withdrawApplication);

module.exports = router;
