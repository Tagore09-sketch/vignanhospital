import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import apiRoutes from "./routes/api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", apiRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Vignan Hospital API Server</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .card { background: #1e293b; padding: 2rem 3rem; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); text-align: center; max-width: 500px; border: 1px solid #334155; }
          h1 { color: #38bdf8; margin-bottom: 0.5rem; }
          p { color: #94a3b8; font-size: 1rem; line-height: 1.5; }
          .badge { background: #10b981; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; display: inline-block; margin-top: 1rem; }
          .endpoint { background: #0f172a; padding: 8px 12px; border-radius: 6px; color: #a7f3d0; font-family: monospace; font-size: 0.9rem; margin-top: 1rem; display: block; text-align: left; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🏥 Vignan Hospital API Server</h1>
          <p>Express.js + MongoDB Atlas Backend is active and operational.</p>
          <div class="badge">API STATUS: ONLINE</div>
          <p style="margin-top: 1.5rem; text-align: left; font-weight: 600;">Available Endpoints:</p>
          <span class="endpoint">POST /api/appointments</span>
          <span class="endpoint">POST /api/orders</span>
          <span class="endpoint">POST /api/careers</span>
          <span class="endpoint">GET  /api/health</span>
        </div>
      </body>
    </html>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Vignan Hospital Express Server running on http://localhost:${PORT}`);
});
