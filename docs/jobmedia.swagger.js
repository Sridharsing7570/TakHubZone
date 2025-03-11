/**
 * @swagger
 * tags:
 *   name: JobMedia
 *   description: JobMedia management APIs
 */

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload a media file for a job
 *     tags: [JobMedia]
 *     description: Upload a media file linked to a specific job.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Media uploaded successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /view/{jobId}:
 *   get:
 *     summary: Retrieve media details for a job
 *     tags: [JobMedia]
 *     description: Fetch media file details linked to a specific job.
 *     parameters:
 *       - in: path
 *         name: jobId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the job
 *     responses:
 *       200:
 *         description: Media details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JobMedia'
 *       404:
 *         description: Media not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Delete a media file
 *     tags: [JobMedia]
 *     description: Delete a media file by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the media file
 *     responses:
 *       200:
 *         description: Media deleted successfully
 *       404:
 *         description: Media not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     JobMedia:
 *       type: object
 *       properties:
 *         jobId:
 *           type: string
 *           description: Reference to the Job ID
 *         filePath:
 *           type: string
 *           description: Path of the uploaded media file
 *         fileType:
 *           type: string
 *           description: Type of the uploaded file (e.g., image, video, etc.)
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last updated date of the media record
 *       example:
 *         jobId: "abc123"
 *         filePath: "/uploads/job123/image1.png"
 *         fileType: "image"
 *         updatedAt: "2025-03-11T09:30:00Z"
 */
