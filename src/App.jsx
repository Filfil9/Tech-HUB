// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Task1/Home";
import About from "./Task1/About";
import Services from "./Task1/Services";
import Contact from "./Task1/Contact";
import WhatILearned from "./Task1/WhatILearned";
import Header from "./Task1/Header";
import Footer from "./Task1/Footer";
import Posts from "./Task1/Post";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/what-i-learned" element={<WhatILearned />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
