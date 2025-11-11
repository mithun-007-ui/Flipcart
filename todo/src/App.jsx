import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pending from "./pages/Pending";
import History from "./pages/History";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="body">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/pending">Pending</Link> |{" "}
        <Link to="/history">History</Link>
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
