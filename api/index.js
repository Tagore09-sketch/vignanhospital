import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-Memory Database Stores (Works automatically on Vercel without external DB setup)
const memoryDb = {
  appointments: [],
  orders: [],
  careers: [],
};

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Vignan Hospital Backend API (Vercel Serverless) is active",
    timestamp: new Date().toISOString(),
  });
});

// --- APPOINTMENTS ENDPOINT ---
app.post("/api/appointments", (req, res) => {
  try {
    const { fullName, phone, email, message, service } = req.body;
    if (!fullName || !phone) {
      return res.status(400).json({ success: false, message: "Full name and phone number are required." });
    }

    const newAppointment = {
      id: Date.now().toString(),
      fullName,
      phone,
      email: email || "",
      message: message || "",
      service: service || "General Consultation",
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    memoryDb.appointments.push(newAppointment);

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully!",
      data: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/api/appointments", (req, res) => {
  res.status(200).json({ success: true, count: memoryDb.appointments.length, data: memoryDb.appointments });
});

// --- ORDERS (RENTAL & PRODUCTS) ENDPOINT ---
app.post("/api/orders", (req, res) => {
  try {
    const { fullName, phone, email, address, productName, paymentMethod, onlinePayOption, orderType } = req.body;
    if (!fullName || !phone || !address || !productName) {
      return res.status(400).json({ success: false, message: "Required order details missing." });
    }

    const newOrder = {
      id: Date.now().toString(),
      fullName,
      phone,
      email: email || "",
      address,
      productName,
      paymentMethod: paymentMethod || "COD",
      onlinePayOption: onlinePayOption || null,
      orderType: orderType || "Rental",
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    memoryDb.orders.push(newOrder);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      data: newOrder,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/api/orders", (req, res) => {
  res.status(200).json({ success: true, count: memoryDb.orders.length, data: memoryDb.orders });
});

// --- CAREERS ENDPOINT ---
app.post("/api/careers", (req, res) => {
  try {
    const { fullName, phone, email, role, experience, message } = req.body;
    if (!fullName || !phone || !role) {
      return res.status(400).json({ success: false, message: "Full name, phone, and role are required." });
    }

    const newApplication = {
      id: Date.now().toString(),
      fullName,
      phone,
      email: email || "",
      role,
      experience: experience || "Not specified",
      message: message || "",
      status: "Received",
      createdAt: new Date().toISOString(),
    };

    memoryDb.careers.push(newApplication);

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
      data: newApplication,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/api/careers", (req, res) => {
  res.status(200).json({ success: true, count: memoryDb.careers.length, data: memoryDb.careers });
});

// Export Serverless Handler for Vercel
export default app;
