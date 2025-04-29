const express = require("express");
require("dotenv").config();
const cors = require("cors");
const tenderRoutes = require("./routes/tenders");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://tendor-project-l7t2.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

app.use("/api/tenders", tenderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
