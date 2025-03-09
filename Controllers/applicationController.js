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

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ jobId });

    if (!applications.length) {
      return res.status(404).json({ message: "No Application found." });
    }

    return res
      .status(200)
      .json({ message: "Application fetched successfully", applications });
  } catch (error) {
    logger.error(`${error} durring fetching applications`);
    return res
      .status(500)
      .json({ message: "Failed to fetch applications. Try again later." });
  }
};
