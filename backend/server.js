const testRoutes = require("./routes/test.routes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const jobRoutes = require("./routes/job.routes");
const userRoutes = require("./routes/user.routes");
const applicationRoutes = require("./routes/application.routes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/test", testRoutes);
app.use("/jobs", jobRoutes);
app.use("/users", userRoutes);
app.use("/applications", applicationRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Job portal API is Running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});