import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pending from "./pages/Pending";
import History from "./pages/History";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="body">
      <nav className="list">
        <Link  to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/pending">Pending</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/history">History</Link>&nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/pending" element={<Pending tasks={tasks} setTasks={setTasks} />} />
        <Route path="/history" element={<History tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </div>
  );
}

export default App;
