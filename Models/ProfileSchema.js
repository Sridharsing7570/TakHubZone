const { model, Schema } = require("mongoose");

const profileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bio: {
      type: String,
    },
    skills: [String],
    workExperience: [String],
    certifications: [String],
    portfolio: [String],
    rating: {
      type: Number,
      default: 0,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

const Profile = model("Profile", profileSchema);
module.exports = Profile;
