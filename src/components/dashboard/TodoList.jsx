import { useState, useEffect } from "react";

const defaultTasks = [
  { id: 1, text: "Read 50 questions", completed: false },
  { id: 2, text: "Revise notes", completed: false },
  { id: 3, text: "Attempt a mock exam", completed: false },
  { id: 4, text: "Attent Online Classes", completed: false },
  { id: 5, text: "Review incorrect answers", completed: false },
];

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("dailyTasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      setTasks(defaultTasks);
      localStorage.setItem("dailyTasks", JSON.stringify(defaultTasks));
    }
  }, []);

  // Toggle task completion
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("dailyTasks", JSON.stringify(updatedTasks));
  };

  // Reset tasks every day
  useEffect(() => {
    const lastReset = localStorage.getItem("lastResetDate");
    const today = new Date().toDateString();

    if (lastReset !== today) {
      localStorage.setItem("dailyTasks", JSON.stringify(defaultTasks));
      localStorage.setItem("lastResetDate", today);
      setTasks(defaultTasks);
    }
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-3">📅 Daily To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-3 mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 cursor-pointer"
            />
            <span
              className={task.completed ? "line-through text-gray-500" : ""}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
