import { useEffect, useState } from "react";

import { Sidebar, Header, Navbar, MainContent } from "../";

import "./app.css";

const App = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch("https://api.skilla.ru/mango/getList", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer testtoken",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setCalls(data))
        .catch((err) => console.log(err.message));
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="content container">
        <Header />
        <Navbar />
        <MainContent calls={calls} />
      </div>
    </div>
  );
};

export default App;
