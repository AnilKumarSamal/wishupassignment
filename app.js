require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/user/userroute");

app.use(express.json());

app.use("/api/user", userRouter);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`server up and runnnig on :${port}`);
});
