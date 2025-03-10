const Job = require("../Models/JobSchema");
const logger = require("../Config/logger");

exports.createJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      location,
      paymentDetails,
      timeRequirements,
      status,
      assignedTo,
      budget,
      skillsRequired,
    } = req.body;
    const userId = req.params.userId;

    await Job.create({
      title,
      description,
      category,
      location,
      paymentDetails,
      timeRequirements,
      status,
      assignedTo,
      budget,
      skillsRequired,
      createdBy: userId,
    });

    return res.status(201).json("you post a job successfully!");
  } catch (error) {
    logger.error(`${error} during posting a job`);
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const allJobs = await Job.find().skip(skip).limit(limit).select("-__V");

    const totalJobs = await Job.countDocuments();

    return res.status(200).json({
      message: "Fetched jobs successfully",
      currentPage: page,
      totalPages: Math.ceil(totalJobs / limit),
      totalJobs,
      jobs: allJobs,
    });
  } catch (error) {
    logger.error(`${error} during fetching all jobs`);
    return res
      .status(500)
      .json({ message: "Internal Server Error. Please try again later." });
  }
};

exports.updateJobs = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const body = req.body;

    const updatedJob = await Job.findByIdAndUpdate(jobId, body, { new: true });

    if (!updatedJob) {
      return res.status({ message: "Job not found." });
    }
    return res.status(200).json({ message: "Job updated successfully" });
  } catch (error) {
    logger.error(`${error} during updating job`);
    return res
      .status(500)
      .json({
        message: "Internl server error. please try again later.",
        error,
      });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const deleteJob = await Job.findByIdAndDelete(jobId);

    if (!deleteJob) {
      return res.status(404).json({ message: "Job not found." });
    }

    return res.status(200).json({ message: "Job deleted successfully!." });
  } catch (error) {
    logger.error(`${error}  during deleting job`);
    return res.status(500).json({
      message: "Internal server error. Please try again later",
      error,
    });
  }
};
