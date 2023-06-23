const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Rise early in the morning",
    completitionStatus: true,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Take a bath",
    completitionStatus: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Eat breakfast",
    completitionStatus: true,
  },
];

const getTasks = () => tasks;

module.exports = {
  tasks,
  getTasks,
};
