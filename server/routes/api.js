import express from "express";
import Appointment from "../models/Appointment.js";
import Order from "../models/Order.js";
import Career from "../models/Career.js";

const router = express.Router();

// Health Check
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Vignan Hospital Backend API is running smoothly",
    timestamp: new Date().toISOString(),
  });
});

// --- APPOINTMENTS ---
// POST /api/appointments - Book a new appointment
router.post("/appointments", async (req, res) => {
  try {
    const { fullName, phone, email, message, service } = req.body;
    if (!fullName || !phone) {
      return res.status(400).json({ success: false, message: "Full name and phone number are required." });
    }

    const appointment = new Appointment({ fullName, phone, email, message, service });
    await appointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully!",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/appointments - Fetch all appointments
router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- ORDERS (RENTAL & PRODUCTS) ---
// POST /api/orders - Create new order
router.post("/orders", async (req, res) => {
  try {
    const { fullName, phone, email, address, productName, paymentMethod, onlinePayOption, orderType } = req.body;
    if (!fullName || !phone || !address || !productName || !paymentMethod) {
      return res.status(400).json({ success: false, message: "Required fields missing." });
    }

    const order = new Order({
      fullName,
      phone,
      email,
      address,
      productName,
      paymentMethod,
      onlinePayOption,
      orderType,
    });
    await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      data: order,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/orders - Fetch all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- CAREERS ---
// POST /api/careers - Submit career application
router.post("/careers", async (req, res) => {
  try {
    const { fullName, phone, email, role, experience, message } = req.body;
    if (!fullName || !phone || !role) {
      return res.status(400).json({ success: false, message: "Full name, phone, and role are required." });
    }

    const career = new Career({ fullName, phone, email, role, experience, message });
    await career.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
      data: career,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/careers - Fetch all applications
router.get("/careers", async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
