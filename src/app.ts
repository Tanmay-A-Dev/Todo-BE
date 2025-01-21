import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import tasksRouter from "./routes/tasks";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/tasks", tasksRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
