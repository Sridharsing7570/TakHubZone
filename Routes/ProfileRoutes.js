const express = require("express");
const profileContoller = require("../Controllers/profileContoller");
const router = express();

/**
 * @swagger
 * /profile/{userId}:
 *   get:
 *    summary: Get user profile
 *     description: Retrieve the profile details of a user by their ID.
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
 *         content:
 *           application/json:
 *            example:
 *              userId: "60c72b2f5f1b2c6f8f3b3d1a"
 *              bio: "Web developer with 3 years of experience"
 *              skills: ["JavaScript", "React", "Node.js"]
 *              workExperience: ["Company A", "Company B"]
 *              certifications: ["Certified React Developer"]
 *              portfolio: ["https://myportfolio.com"]
 *             rating: 4.5
 *             reviews: ["60c72b2f5f1b2c6f8f3b3d1b"]
 *     404:
 *       description: Profile not found
 *
 */

router.get("/profile/:userId", profileContoller.getProfile);

/**
 * @swagger
 *profile/{id}:
 *  put:
 *    summary: Update user profile
 *    description: Update the profile details of a user by their profile ID.
 *    parameters:
 *      - in: path
 *        name: id
 *       required: true
 *        schema:
 *          type: string
 *        description: The ID of the profile to update
 *    requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             type: object
 *           properties:
 *             bio:
 *              type: string
 *             skills:
 *               type: array
 *               items:
 *                 type: string
 *            workExperience:
 *               type: array
 *               items:
 *                 type: string
 *             certifications:
 *               type: array
 *              items:
 *                type: string
 *             portfolio:
 *               type: array
 *               items:
 *                 type: string
 *             rating:
 *                type: number
 *              reviews:
 *                type: array
 *                items:
 *                  type: string
 *     responses:
 *      200:
 *        description: Successfully updated the profile
 *        content:
 *          application/json:
 *            example:
 *              message: "Profile updated successfully"
 *      400:
 *        description: Invalid data provided
 *      404:
 *        description: Profile not found
 *
 */

router.put("/profile/:id", profileContoller.updateProfile);
