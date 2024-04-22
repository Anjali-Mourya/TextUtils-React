// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = `TextUtils - Dark Mode`;
      // setInterval(() => {
      //   document.title = `TextUtils is Amazing Moode`;
      // }, 2000);
      // setInterval(() => {
      //   document.title = `Install TextUtils Now`;
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = `TextUtils - Light Mode`;
    }
  };
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter The text to analyze below"
          mode={mode}
        />
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
