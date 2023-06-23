const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const routes = require("express").Router();
const { tasks: taskData } = require("./task");
const req = require("express/lib/request");
const res = require("express/lib/response");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

routes.get("/tasks", (req, res) => {
  res.json(taskData);
});

routes.get("/", (req, res) => {
  res.json({ message: "Server is working" });
});

routes.get("/tasks/:id", (req, res) => {
  res.json({ params: taskData.tasks.find((item) => item.id == req.params.id) });
});

routes.post("/tasks", (req, res) => {
  const { id, title, description } = req.body;
  const newTask = {
    id,
    title,
    description,
  };
  taskData.push(newTask);
  res.json(taskData);
});

routes.put("/tasks/:id", (req, res) => {
  const { id, title, description } = req.body;
  const taskToUpdate = {
    id,
    title,
    description,
  };
  const index = taskData.findIndex((task) => task.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    taskData[index] = taskToUpdate;

    res.status(200).json(taskData[index]);
  }
});

routes.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const index = taskData.findIndex((task) => task.id == taskId);
  if (index === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    taskData.splice(index, 1);
    res.status(200).json({ message: "Task Deleted Successfully" });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// console.log(demo)
