import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
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
    address: {
      type: String,
      required: [true, "Delivery address is required"],
    },
    productName: {
      type: String,
      required: [true, "Product/Equipment name is required"],
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE"],
      required: true,
    },
    onlinePayOption: {
      type: String,
      default: null,
    },
    orderType: {
      type: String,
      enum: ["Rental", "Product"],
      default: "Rental",
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
