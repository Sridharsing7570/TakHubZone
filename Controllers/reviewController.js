const Review = require("../Models/ReviewSchema");
const logger = require("../Config/logger");

exports.submitReview = async (req, res) => {
  const { reviewerId, reviewedUserId, rating, reviewText } = req.body;
  try {
    const review = new Review({
      reviewerId,
      reviewedUserId,
      rating,
      reviewText,
    });

    await review.save();

    return res
      .status(201)
      .json({ success: true, message: "Review submitted successfully" });
  } catch (error) {
    logger.error(`${error} get during create review`);
    return res.status(500).json({
      message: "Internal server error. Please try again later",
      error,
    });
  }
};

exports.getReviewByuserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const review = await Review.find({ reviewedUserId: userId }).populate(
      "reviewerId",
      "name"
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    return res.status(200).json({ success: true, review });
  } catch (error) {
    logger.error(`${error} during get review`);
    return res
      .status(500)
      .json({
        message: "Internal server error. Please try again later",
        error,
      });
  }
};
