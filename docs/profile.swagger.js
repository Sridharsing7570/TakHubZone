/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: Profile management APIs
 */

/**
 * @swagger
 * /profile/{userId}:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 *     description: Retrieve the profile details of a user by their ID.
 *     content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user whose profile is being retrieved
 *     responses:
 *       200:
 *         description: Successfully retrieved the profile
 *       404:
 *         description: Profile not found
 */

/**
 * @swagger
 * /profile/{id}:
 *   put:
 *     summary: Update user profile
 *     tags: [Profile]
 *     description: Update the profile details of a user by their profile ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the profile to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bio:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *               workExperience:
 *                 type: array
 *                 items:
 *                   type: string
 *               certifications:
 *                 type: array
 *                 items:
 *                   type: string
 *               portfolio:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: number
 *               reviews:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Successfully updated the profile
 *       400:
 *         description: Invalid data provided
 *       404:
 *         description: Profile not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *           description: Reference to the User model
 *         bio:
 *           type: string
 *           description: Brief biography of the user
 *         skills:
 *           type: array
 *           items:
 *             type: string
 *         workExperience:
 *           type: array
 *           items:
 *             type: string
 *         certifications:
 *           type: array
 *           items:
 *             type: string
 *         portfolio:
 *           type: array
 *           items:
 *             type: string
 *         rating:
 *           type: number
 *         reviews:
 *           type: array
 *           items:
 *             type: string
 */
