// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Task1/Home";
import About from "./Task1/About";
import Services from "./Task1/Services";
import Contact from "./Task1/Contact";
import WhatILearned from "./Task1/WhatILearned";
import Header from "./Task1/Header";
import Footer from "./Task1/Footer";
import Posts from "./Task1/Post";
import Clock from "./Task1/Clock";
import Todo from "./Task1/Todo";
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-i-learned" element={<WhatILearned />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>

    </Router>
  );
}

export default App;
