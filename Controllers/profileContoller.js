const Profile = require("../Models/ProfileSchema");
const logger = require("../Config/logger");

// Create prfile(Automatically on user registration)
exports.createProfile = async (userId) => {
  try {
    const profile = new Profile({
      userId,
    });

    await profile.save();
    return profile;
  } catch (error) {
    logger.error(`${error} during creating new profile`);
  }
};

// fetch profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const profile = await Profile.findOne({ userId: userId })
      .populate("userId", ["name", "email"])
      .populate("reviews");

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    logger.error(`${error} during get profile`);
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

// Update profile
exports.updateProfile = async (req, res) => {
  try {
    const { bio, skills, workExperience, certifications, portfolio, rating } =
      req.body;

    const profileFields = {
      bio,
      skills,
      workExperience,
      certifications,
      portfolio,
      rating,
    };

    const profile = await Profile.findOneAndUpdate(
      { userId: req.params.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );

    return res
      .status(201)
      .json({ message: "proofile updated successfully", profile: profile });
  } catch (error) {
    logger.error(`${error} during update profile`);
    return res.status(500).json({ message: `Internal server error: ${error}` });
  }
};
