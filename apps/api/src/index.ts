import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.API_PORT || 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ service: "horizon-api", status: "ok" });
});

app.get("/health/ai", (_req, res) => {
  res.json({ configured: Boolean(process.env.GEMINI_API_KEY) });
});

app.listen(port, () => {
  console.log(`[horizon-api] listening on http://localhost:${port}`);
});
