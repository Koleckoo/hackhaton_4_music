import { useState } from "react";
import "./App.scss";
import Router from "./components/Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {


  return (
    <div className="App">
        < RouterProvider router = { Router } />
    </div>
  );
}

export default App;
