// fistly making the app instance
const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;
// requiring mongoose
const mongoose = require("mongoose")
require("dotenv").config()
// getting database uri
const uri = process.env.MONGO_URI;


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then((data) => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database connected succefully");
})


app.use(cors());
app.use(express.json());
// requiring the routes of express for api 
// jwt verify
const verify = require("./middleware/verify");
const auth = require("./routes/Auth");

const commentRouter = require("./routes/ContactUs");
const userRouter = require("./routes/User");
const navbar = require("./routes/NavBar");
const forum = require("./routes/Forum");
// const auth = require("./routes/Auth");
app.use("/api/contact", commentRouter);
app.use("/api/user", userRouter);
app.use("/api/me", verify, auth);
app.use("/api/forum/", forum);

// serving build of react
app.use(express.static("client/build"));
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})


app.listen(port, () => {
    console.log("server is started", port);
})