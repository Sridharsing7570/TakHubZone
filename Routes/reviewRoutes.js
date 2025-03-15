const { Router } = require("express");
const router = Router();
const reviewController = require("../Controllers/reviewController");

router.post("/submit", reviewController.submitReview);
router.get("/user/:userId", reviewController.getReviewByuserId);
router.put("/update/:reviewId", reviewController.updateReview);
router.delete("/delete/:reviewId", reviewController.deleteReview);

module.exports = router;
