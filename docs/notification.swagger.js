/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *           description: The ID of the user associated with the notification
 *         type:
 *           type: string
 *           description: The type of the notification
 *         message:
 *           type: string
 *           description: The content of the notification
 *         isRead:
 *           type: boolean
 *           description: Whether the notification has been read
 *           default: false
 */

/**
 * @swagger
 * /api/notifications/create:
 *   post:
 *     summary: Create a new notification
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notification'
 *     responses:
 *       201:
 *         description: Notification created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/notifications/get:
 *   get:
 *     summary: Get all notifications
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: A list of notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notification'
 */

/**
 * @swagger
 * /api/notifications/update:
 *   put:
 *     summary: Update a notification
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               notificationId:
 *                 type: string
 *                 description: ID of the notification to update
 *               isRead:
 *                 type: boolean
 *                 description: Mark notification as read or unread
 *     responses:
 *       200:
 *         description: Notification updated successfully
 *       404:
 *         description: Notification not found
 */

/**
 * @swagger
 * /api/notifications/clear:
 *   delete:
 *     summary: Clear all notifications
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: All notifications cleared successfully
 *       500:
 *         description: Internal server error
 */
