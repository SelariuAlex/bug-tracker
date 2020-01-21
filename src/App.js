import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { SearchBar } from "./components/layout/SearchBar";
import { AddBtn } from "./components/layout/AddBtn";
import { Logs } from "./components/logs/Logs";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <Logs />
      </div>
    </>
  );
}

export default App;
