require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/user/userroute");
const subscriptionRouter = require("./api/subscription/subscriptionroute");

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/subscription", subscriptionRouter);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`server up and runnnig on :${port}`);
});
