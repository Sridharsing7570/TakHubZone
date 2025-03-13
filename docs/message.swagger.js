/**
 * @swagger
 * tags:
 *   name: Message
 *   description: Message management APIs
 */

/**
 * @swagger
 * /api/message/send:
 *   post:
 *     summary: Send a message
 *     tags: [Message]
 *     description: Sends a new message to specified participants
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Invalid request data
 */

/**
 * @swagger
 * /api/message/get:
 *   get:
 *     summary: Get messages
 *     tags: [Message]
 *     description: Fetches messages based on filters
 *     responses:
 *       200:
 *         description: List of messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *       404:
 *         description: No messages found
 */

/**
 * @swagger
 * /api/message/delete:
 *   delete:
 *     summary: Delete a message
 *     tags: [Message]
 *     description: Deletes a message for specified users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               messageId:
 *                 type: string
 *                 example: 65d1f1d64d3b4c9a4f5b8e8b
 *     responses:
 *       200:
 *         description: Message deleted successfully
 *       404:
 *         description: Message not found
 */

/**
 * @swagger
 * /api/message/update:
 *   put:
 *     summary: Update read status
 *     tags: [Message]
 *     description: Marks a message as read
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               messageId:
 *                 type: string
 *                 example: 65d1f1d64d3b4c9a4f5b8e8b
 *               readStatus:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Message updated successfully
 *       404:
 *         description: Message not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         participants:
 *           type: array
 *           items:
 *             type: string
 *           example: ["65d1f1d64d3b4c9a4f5b8e8b", "65d1f1d64d3b4c9a4f5b8e8c"]
 *         sentBy:
 *           type: string
 *           example: "65d1f1d64d3b4c9a4f5b8e8b"
 *         content:
 *           type: string
 *           example: "Hello, how are you?"
 *         readStatus:
 *           type: boolean
 *           example: false
 *         deletedFor:
 *           type: array
 *           items:
 *             type: string
 *           example: ["65d1f1d64d3b4c9a4f5b8e8b"]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
