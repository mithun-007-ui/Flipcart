import React, { useState } from "react";

function Home({ tasks, setTasks }) {
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") {
      alert("Please type a task!");
      return;
    }
    const now = new Date();
    const dateTime = now.toLocaleString();
    const newTask = {
      id: Date.now(),
      name: text,
      date: dateTime,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  return (
    <div>
      <h1>TODO - Home</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task"
      />
      &nbsp;
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.name} <br />
            <small>Added on: {t.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
