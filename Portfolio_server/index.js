const express = require("express");
const app = express();
require("./Config/config");
const cors = require("cors");
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true, 
  })
);
app.use("/", require("./Routes/RequestRoute.js"));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});