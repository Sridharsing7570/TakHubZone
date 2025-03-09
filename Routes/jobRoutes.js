const { Router } = require("express");
const router = Router();
const jobController = require("../Controllers/jobsController");
/**
 * @swagger
 /create:
    post:
      summary: Create a new job
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Job'
      responses:
        201:
          description: Job created successfully
        400:
          description: Bad request
*/
router.post("/create", jobController.createJobs);

/**
 * @swagger
 /get:
    get:
      summary: Get all jobs
      responses:
        200:
          description: List of jobs retrieved successfully
        500:
          description: Server error


          */

router.get("/get", jobController.getJobs);

/**
 * @swagger
  /update/{jobId}:
    put:
      summary: Update a job
      parameters:
        - in: path
          name: jobId
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Job'
      responses:
        200:
          description: Job updated successfully
        404:
          description: Job not found

          */

router.put("/update/:jobId", jobController.updateJobs);

/**
 * @swagger
  /delete/{jobId}:
    delete:
      summary: Delete a job
      parameters:
        - in: path
          name: jobId
          required: true
          schema:
            type: string
      responses:
        200:
          description: Job deleted successfully
        404:
          description: Job not found
          */

router.delete("/delete/:jobId", jobController.deleteJob);

/**
 * @swagger

paths: components: schemas: Job: type: object;
properties: title: type: string;
example: "Web Developer Needed";
description: type: string;
example: "Looking for a React.js developer for a short-term project.";
skillsRequired: type: array;
items: type: string;
example: ["React.js", "Node.js", "MongoDB"];
budget: type: number;
example: 5000;
category: type: string;
example: "65f3d9b54b1a2a6d2c78d98e";
location: type: string;
example: "65f3d9b54b1a2a6d2c78d98f";
paymentDetails: type: string;
example: "Payment after project completion";
timeRequirements: type: string;
example: "2 weeks";
status: type: string;
enum: ["open", "in-progress", "completed", "cancelled"];
example: "open";
createdBy: type: string;
example: "65f3d9b54b1a2a6d2c78d990";
assignedTo: type: string;
example: "65f3d9b54b1a2a6d2c78d991";

*/
