
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import About from "./MyComponents/About";
import  Addtodo  from "./MyComponents/Addtodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MyComponents/Home";
function App() {
  return (
    <>
      <Router>
        <Header title="MY TODOS LIST" searchbar={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<Addtodo />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
};
export default App;
