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
