import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/modules/Home/index";
import MatchDetailPage from "./components/modules/match-detail-page/index";
function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Match Center</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match-detail-Page/:id" element={<MatchDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
