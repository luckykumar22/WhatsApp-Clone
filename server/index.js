import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors);
app.use(express.json);

const server = app.listen(process.env.PORT || 3001, () => {
  console.log("Server Up and Running");
});
