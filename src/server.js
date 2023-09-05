import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
// import conn from "./configs/connectDB";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// setup view Engine
configViewEngine(app);
//Router
initWebRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
