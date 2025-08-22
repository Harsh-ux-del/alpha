import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import About from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MyComponents/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<Addtodo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
