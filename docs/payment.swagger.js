/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Review management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - payerId
 *         - payeeId
 *         - jobId
 *         - amount
 *       properties:
 *         payerId:
 *           type: string
 *           description: ID of the payer (user making the payment)
 *         payeeId:
 *           type: string
 *           description: ID of the payee (user receiving the payment)
 *         jobId:
 *           type: string
 *           description: ID of the related job
 *         amount:
 *           type: number
 *           description: Payment amount
 *         status:
 *           type: string
 *           enum: [pending, completed, failed]
 *           default: pending
 *         transactionDate:
 *           type: string
 *           format: date-time
 *           description: Transaction date
 */

/**
 * @swagger
 * /api/payment/initiate:
 *   post:
 *     summary: Initiate a payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: Payment initiated successfully
 *       500:
 *         description: Failed to initiate payment
 */

/**
 * @swagger
 * /api/payment/track/{paymentId}:
 *   get:
 *     summary: Track a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the payment to track
 *     responses:
 *       200:
 *         description: Payment details retrieved successfully
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Failed to track payment
 */

/**
 * @swagger
 * /api/payment/commission/{paymentId}:
 *   post:
 *     summary: Calculate and handle platform commission
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the payment for commission calculation
 *     responses:
 *       200:
 *         description: Commission calculated successfully
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Failed to calculate commission
 */

/**
 * @swagger
 * /api/payment/dispute:
 *   post:
 *     summary: Raise a dispute for a payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentId:
 *                 type: string
 *                 description: ID of the payment in dispute
 *               reason:
 *                 type: string
 *                 description: Reason for raising the dispute
 *     responses:
 *       200:
 *         description: Dispute raised successfully
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Failed to raise dispute
 */
