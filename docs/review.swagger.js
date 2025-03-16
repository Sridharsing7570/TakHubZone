/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       required:
 *         - reviewerId
 *         - reviewedUserId
 *         - rating
 *       properties:
 *         reviewerId:
 *           type: string
 *         reviewedUserId:
 *           type: string
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *         reviewText:
 *           type: string
 *       example:
 *         reviewerId: "60d21b4667d0d8992e610c85"
 *         reviewedUserId: "60d21b4667d0d8992e610c86"
 *         rating: 4
 *         reviewText: "Great job!"
 */

/**
 * @swagger
 * /api/review/submit:
 *   post:
 *     summary: Submit a review
 *     description: Allows authenticated users to submit reviews
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: Review submitted successfully
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/review/user/{userId}:
 *   get:
 *     summary: Get reviews for a user
 *     description: Fetches all reviews for a specific user
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reviews
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/review/update/{reviewId}:
 *   put:
 *     summary: Update a review
 *     description: Allows the original reviewer to update their review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: Review updated successfully
 *       404:
 *         description: Review not found or unauthorized
 *       500:
 *         description: Internal server error
 *
 */
/**
 * @swagger
 * /api/review/delete/{reviewId}:
 *   delete:
 *     summary: Delete a review
 *     description: Admin only can delete inappropriate reviews
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       500:
 *         description: Internal server error
 */
