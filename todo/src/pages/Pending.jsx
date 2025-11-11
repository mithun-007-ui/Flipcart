import React from "react";

function Pending({ tasks, setTasks }) {
  const completeTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: true } : t)));
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const pending = tasks.filter((t) => !t.completed);

  return (
    <div>
      <h1>Pending Tasks</h1>
      {pending.length === 0 ? (
        <p>No pending tasks 🎉</p>
      ) : (
        <ul>
          {pending.map((t) => (
            <li key={t.id}>
              {t.name}
              <br />
              <small>Added on: {t.date}</small>
              <br />
              <button onClick={() => completeTask(t.id)}>Complete</button>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Pending;