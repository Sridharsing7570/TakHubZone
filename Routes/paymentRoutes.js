const { Router } = require("express");
const router = Router();
const paymentController = require("../Controllers/paymentController");

router.post("/initiate", paymentController.initiatePayment);

router.get("/track/:paymentId", paymentController.trackPayment);

router.post("/commission/:paymentId", paymentController.handleCommission);

router.post("/dispute", paymentController.raiseDispute);

module.exports = router;
