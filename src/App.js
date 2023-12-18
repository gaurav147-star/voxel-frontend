import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Router>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
