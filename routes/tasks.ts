import express from "express";
import { Task } from "../models/tasks";

export const tasksRouter = express.Router();

const tasks: Task[] = [];

tasksRouter.get("/tasks", (req, res) => {
    res.json(tasks);
  });
  tasksRouter.get("/tasks/:id", (req, res) => {
    const movie = tasks.find((task) => task.id === +req.params.id);
    res.json(tasks);
  });
  
  tasksRouter.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        task: req.body.task,
        priortiy: req.body.priority,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        completed: req.body.completed,
        due_date: req.body.due_date, 
    };
    tasks.push(newTask);
    res.json(newTask);
  });
  export default tasksRouter;