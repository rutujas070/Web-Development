import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    API.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    await API.post("/tasks", {
      title: e.target.title.value,
      description: e.target.description.value,
    });
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input name="title" placeholder="Title" />
        <input name="description" placeholder="Description" />
        <button>Add</button>
      </form>

      {tasks.map(t => (
  <div className="task" key={t.id}>
    <h4>{t.title}</h4>
    <p>{t.description}</p>
    <small>Status: {t.status}</small>
  </div>
))}

    </>
  );
}
