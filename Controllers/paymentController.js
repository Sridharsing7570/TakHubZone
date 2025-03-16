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
