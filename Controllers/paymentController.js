const Payment = require("../Models/PaymentSchema");
const logger = require("../Config/logger");

// Intiate Payment
exports.initiatePayment = async (req, res) => {
  const { payerId, payeeId, jobId, amount } = req.body;
  try {
    const { payment } = new Payment({ payerId, payeeId, jobId, amount });

    await payment.save();
    return res
      .status(201)
      .json({ success: false, message: "Payment initiated successfully." });
  } catch (error) {
    logger.error(`${error} get initiate paymment`);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again", error });
  }
};

// Track payment
exports.trackPayment = async (req, res) => {
  const { paymentId } = req.params;
  try {
    const payment = await Payment.findById(paymentId).populate(
      "payerId payeeId jobId"
    );

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment not found." });
    }

    return res.status(200).json({ success: true, payment });
  } catch (error) {
    logger.error(`${error} during track payemnt`);
    return res
      .status(500)
      .json({ success: false, message: "Failed to track payment", error });
  }
};

// Handle commission
exports.handleCommission = async (req, res) => {
  const { paymentId } = req.params;
  const commissionRate = 0.1; // 10% platformm commission

  try {
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment not found." });
    }

    const commission = payment.amount * commissionRate;
    const finalAmount = payment.amount - commission;

    payment.amount = finalAmount;

    await payment.save();

    return res.status(200).json({
      success: true,
      message: "Commission calculated successfully",
      commission,
      finalAmount,
    });
  } catch (error) {
    logger.error(`${error} get during calculate commission`);
    return res
      .status(500)
      .json({ message: "Failed to calculate commission", error });
  }
};

// Dispute management
exports.raiseDispute = async (req, res) => {
  const { paymentId, reason } = req.body;

  try {
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "payment not found" });
    }

    // add logic to handle dispute resolution (e.g., admin review)
    return res
      .status(200)
      .json({ success: true, message: "Dispute raised successfully" });
  } catch (error) {
    logger.error(`${error} during raised dispute`);
    return res.status(500).json({ message: "Failed to raise dispute.", error });
  }
};
