import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: [true, "Role/Position is required"],
    },
    experience: {
      type: String,
      default: "Not specified",
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Received", "Reviewed", "Interview Scheduled", "Rejected"],
      default: "Received",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Career", careerSchema);
