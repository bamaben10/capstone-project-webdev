import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [users, setUsers] = useState("");
  const [serverInfo, setServerInfo] = useState([]);

  function handleLogin(e) {
    console.log(e);
    setUsers(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/login", {
        text: users,
      })
      .then((res) => {
        setServerInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(users);
    setUsers("");
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/info")
      .then((res) => {
        console.log("RES", res.data);
        setServerInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  function handleComponents() {
    return serverInfo.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.text}</h1>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
