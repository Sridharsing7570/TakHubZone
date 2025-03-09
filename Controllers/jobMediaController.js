const multer = require("multer");
const JobMedia = require("../Models/JobMediaSchema");
const logger = require("../Config/logger");

// Multer setup for filepaths
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, res, cb) => {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload Media
exports.uploadMedia = async (req, res) => {
  try {
    const { jobId } = req.params.jobId;
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const media = new JobMedia({
      jobId,
      filePath: req.file.filePath,
      fileType: req.file.mimeType,
    });

    await media.save();

    return res
      .status(201)
      .json({ message: "File uploaded successfully", media });
  } catch (error) {
    logger.error(`${error} during file upload`);
    return res.status(500).json({
      message: "Failed to uploaded successfully. Try again later.",
      error,
    });
  }
};

exports.getMedia = async (req, res) => {
  try {
    const { jobId } = req.params;
    if (!jobId) {
      return res.status(400).json({ message: "JobId is required" });
    }
    const media = await JobMedia.find({ jobId });
    if (!media.length) {
      return res.status(404).json({ message: "No media found" });
    }

    return res.status(500).json({ message: "Fetched media successfully." });
  } catch (error) {
    logger.error(`${error} during get media`);
    return res.status(500).json({ message: "Failed to retrive media", error });
  }
};

exports.deletemedia = async (req, res) => {
  try {
    const { Id } = req.params;
    if (!Id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const media = await JobMedia.findByIdAndDelete(Id);

    if (!media) {
      return res.status(200).json({ message: "Media not found" });
    }

    return res.status(200).json({ message: "Media deleted successfully" });
  } catch (error) {
    logger.error(`${error} during deleting media`);
    return res
      .status(500)
      .json({ message: "failed to delete media. Try again later" });
  }
};
