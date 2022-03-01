import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
