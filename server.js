
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { route } = require("./routes/route");
const verifyFirebaseToken = require('./middleware/auth');
const pool = require("./services/db");

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

const userRouter = require('../backend/routes/route');

app.post('/api/protected-route', verifyFirebaseToken, (req, res) => {
    res.status(200).json({ message: "Protected content accessed!" });
});


pool.on("connect", () => {
    console.log("Connection pool established with database");
});

pool.on("error", (err) => {
    console.error("Error with the database connection", err);
});

app.use("/api", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
