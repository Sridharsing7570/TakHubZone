/**
 * @swagger
 * components:
 *   schemas:
 *     Application:
 *       type: object
 *       required:
 *         - jobId
 *         - workerId
 *       properties:
 *         jobId:
 *           type: string
 *           example: "605c72b6f1a3c6f1a0f0f0f0"
 *         workerId:
 *           type: string
 *           example: "605c72b6f1a3c6f1a0f0f0f1"
 *         proposal:
 *           type: string
 *           example: "I am experienced and can complete this job efficiently."
 *         status:
 *           type: string
 *           enum: [pending, accepted, rejected]
 *           default: pending
 *         appliedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-03-09T10:00:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: Application
 *   description: Appication management APIs
 */

/**
 * @swagger
 * /api/application/apply:
 *   post:
 *     tags: [Application]
 *     summary: Apply for a job
 *     description: Submit a job application with job ID, worker ID, and proposal details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Application'
 *     responses:
 *       200:
 *         description: Application submitted successfully
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/application/fetched:
 *   get:
 *     tags: [Application]
 *     summary: Get applications
 *     description: Retrieve all job applications.
 *     responses:
 *       200:
 *         description: Successfully fetched applications
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/application/update:
 *   put:
 *     tags: [Application]
 *     summary: Update application status
 *     description: Update the status of a job application (pending, accepted, rejected).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [applicationId, status]
 *             properties:
 *               applicationId:
 *                 type: string
 *                 example: "605c72b6f1a3c6f1a0f0f0f2"
 *               status:
 *                 type: string
 *                 enum: [pending, accepted, rejected]
 *                 example: "accepted"
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/application/withdraw:
 *   delete:
 *     tags: [Application]
 *     summary: Withdraw an application
 *     description: Remove a submitted application by its ID.
 *     parameters:
 *       - in: query
 *         name: applicationId
 *         schema:
 *           type: string
 *         required: true
 *         example: "605c72b6f1a3c6f1a0f0f0f3"
 *     responses:
 *       200:
 *         description: Application withdrawn successfully
 *       400:
 *         description: Invalid application ID
 */
