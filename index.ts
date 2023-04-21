import express from "express";
import tasksRouter from "./routes/tasks";
const app = express();

app.use(express.json());
app.use("/", tasksRouter);
// app.use("/", Router);

app.listen(3001, () => console.log(`Server Running!`));