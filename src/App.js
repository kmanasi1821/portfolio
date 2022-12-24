import React from "react";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            Home
          </Route>
          <Route path="/project" element={<Project></Project>}>
            Project
          </Route>
          <Route path="/about" element={<About></About>}>
            About
          </Route>
          <Route path="/contact" element={<Contact></Contact>}>
            Contact
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
