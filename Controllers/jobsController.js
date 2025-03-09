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
