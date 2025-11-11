import React from "react";

function History({ tasks, setTasks }) {
  const completed = tasks.filter((t) => t.completed);

  const undoTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: false } : t)));
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div>
      <h1>Completed Tasks</h1>
      {completed.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul>
          {completed.map((t) => (
            <li key={t.id}>
              <s>{t.name}</s>
              <br />
              <small>Added on: {t.date}</small>
              <br />
              <button onClick={() => undoTask(t.id)}>Move to Pending</button>
              <button onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;