import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Routes from "./components/Routes";

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

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/info")
  //     .then((res) => {
  //       console.log("RES", res.data);
  //       setServerInfo(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [users]);

  function handleComponents() {
    return serverInfo.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.text}</h1>
        </div>
      );
    });
  }

  return <div className="App">{Routes}</div>;
}

export default App;
