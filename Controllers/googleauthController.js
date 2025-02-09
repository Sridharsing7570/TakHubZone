const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
const secretKey = process.env.JWTsecret;

exports.googleCallback = async (req, res) => {
  try {
    const { displayName, emails } = req.user;

    let user = await User.findOne({ email: emails[0].value });

    if (!user) {
      // Redirect  to role selection page for new users
      return res.redirect(
        `/select-role?name=${displayName}&name=${emails[0].value}`
      );
    }

    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      secretKey,
      { expiresIn: "1d" }
    );

    res.redirect(`/dashboard?token=${token}`);
  } catch (error) {
    console.error("error during google auth", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
};
