const express = require("express");
require("dotenv").config();
const cors = require("cors");
const tenderRoutes = require("./routes/tenders");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://tendor-project-l7t2.vercel.app/",
  })
);
app.use(express.json());

app.use("/api/tenders", tenderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
