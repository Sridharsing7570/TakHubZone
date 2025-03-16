/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the category
 *         name:
 *           type: string
 *           description: Name of the category
 *         description:
 *           type: string
 *           description: Description of the category
 */

/**
 * @swagger
 * /api/categories/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     description: Add a new job category.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 */
/**
 * @swagger
 * /api/categories/get:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     description: Fetch all job categories.
 *     responses:
 *       200:
 *         description: Successfully fetched categories
 */
/**
 * @swagger
 * /api/categories/update/:id:
 *   put:
 *     summary: Update a category
 *     tags: [Category]
 *     description: Modify an existing job category.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated successfully
 */
/**
 * @swagger
 * /api/categories/delete/:id:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
 *     description: Remove an unused category.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the category to delete
 *     responses:
 *       200:
 *         description: Category deleted successfully
 */
