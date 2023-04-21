import express from "express";
import tasksRouter from "./routes/tasks";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", tasksRouter);
// app.use("/", Router);

app.listen(3001, () => console.log(`Server Running!`));