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

// update status
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    if (!applicationId) {
      return res.status(404).json({ message: "ApplicationId required." });
    }

    const validStatus = ["accepted", "rejected"];

    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status." });
    }

    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found." });
    }

    return res
      .status(200)
      .json({ message: `Applcation ${status} successfully`, application });
  } catch (error) {
    logger.error(`${error} durring updating status`);
    return res.status(500).json({
      message: "Failed to update application status. Please try again later.",
    });
  }
};

exports.withdrawApplication = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const application = await Application.findByIdAndDelete(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Applcation not found" });
    }

    return res.status.json({ message: "Application withdrawn successfully" });
  } catch (error) {
    logger.error(`${error} during withddraw application`);
    return res
      .status(500)
      .json({
        message: "Failed to withdraw application. Please try again later.",
      });
  }
};
