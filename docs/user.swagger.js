/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management APIs
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - userType
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               userType:
 *                 type: string
 *                 enum: [Employer, Worker, Contractor]
 *     responses:
 *       201:
 *         description: User registered successfully
 *       500:
 *         description: Internal Server error
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully login
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server error
 */

/**
 * @swagger
 * /api/users/profile/{id}:
 *   get:
 *     summary: Get user profile by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users/profile/{id}:
 *   put:
 *     summary: Update user profile by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *       404:
 *         description: No users found
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - userType
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated unique identifier for the user
 *         name:
 *           type: string
 *           description: Full name of the user
 *         email:
 *           type: string
 *           description: Email address of the user (must be unique)
 *         password:
 *           type: string
 *           description: Encrypted password of the user
 *         phone:
 *           type: string
 *           description: Contact number of the user
 *         address:
 *           type: string
 *           description: Residential address of the user
 *         userType:
 *           type: string
 *           enum: ["Employer", "Worker", "Contractor"]
 *           description: Role of the user in the system
 *         profilePicture:
 *           type: string
 *           description: URL to the user's profile picture
 *         status:
 *           type: string
 *           enum: ["active", "inactive", "blocked"]
 *           description: Account status of the user
 *           default: "active"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of the last update
 */
