import React from "react";
import "./App.css";
import TableComponent from "./TableComponent";
import data from "./data";
function App() {
  return (
    <div className="App m-10">
      <header className="m-6">
        <h1 className="text-4xl text-gray-500 font-bold">
          HISP TANZANIA Physical Development Teaser
        </h1>
      </header>
      <div className="">
        <TableComponent data={data} />
      </div>
    </div>
  );
}

export default App;


