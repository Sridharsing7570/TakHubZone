const Application = require("../Models/ApplicationSchema");
const Job = require("../Models/JobSchema");
const logger = require("../Config/logger");

exports.applyJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const { workerId, proposal } = req.body;

    if (!jobId || !workerId || !proposal) {
      return res
        .status(404)
        .json({ message: "JobId, workerId and proposal is required!" });
    }

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: "job Not found." });
    }

    const newApplication = new Application({
      jobId,
      workerId,
      proposal,
    });

    await newApplication.save();

    return res
      .status(201)
      .json({ message: "Application submitted successfully." });
  } catch (error) {
    logger.error(`${error} during application submission..`);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later" });
  }
};
