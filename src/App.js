import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState ,useEffect} from "react";
import Alert from "./components/Alert";
import Home from "./components/Home";
import History from "./components/History";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [history, setHistory] = useState([]);

useEffect(() => {
  document.body.className = mode === "dark" ? "dark" : "light";
}, [mode]);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  const addToHistory = (action, text) => {
    setHistory((prev) => [...prev, { action, text, time: new Date() }]);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route
            path="/convert"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyze below"
                mode={mode}
                addToHistory={addToHistory}
              />
            }
          />
          <Route
            path="/history"
            element={<History history={history} mode={mode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
