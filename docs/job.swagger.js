/**
 * @swagger
 * tags:
 *   name: Job
 *   description: User management APIs
 */



/**
 * @swagger
 * /api/job/create:
 *   post:
 *     summary: Create a new job
 *     tags: [Job]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/job/get:
 *   get:
 *     summary: Get all jobs
 *     tags: [Job]
 *     responses:
 *       200:
 *         description: List of jobs retrieved successfully
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/job/update/{jobId}:
 *   put:
 *     summary: Update a job
 *     tags: [Job]
 *     parameters:
 *       - in: path
 *         name: jobId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       404:
 *         description: Job not found
 */

/**
 * @swagger
 * /api/job/delete/{jobId}:
 *   delete:
 *     summary: Delete a job
 *     tags: [Job]
 *     parameters:
 *       - in: path
 *         name: jobId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Web Developer Needed"
 *         description:
 *           type: string
 *           example: "Looking for a React.js developer for a short-term project."
 *         skillsRequired:
 *           type: array
 *           items:
 *             type: string
 *           example: ["React.js", "Node.js", "MongoDB"]
 *         budget:
 *           type: number
 *           example: 5000
 *         category:
 *           type: string
 *           example: "65f3d9b54b1a2a6d2c78d98e"
 *         location:
 *           type: string
 *           example: "65f3d9b54b1a2a6d2c78d98f"
 *         paymentDetails:
 *           type: string
 *           example: "Payment after project completion"
 *         timeRequirements:
 *           type: string
 *           example: "2 weeks"
 *         status:
 *           type: string
 *           enum: ["open", "in-progress", "completed", "cancelled"]
 *           example: "open"
 *         createdBy:
 *           type: string
 *           example: "65f3d9b54b1a2a6d2c78d990"
 *         assignedTo:
 *           type: string
 *           example: "65f3d9b54b1a2a6d2c78d991"
 */