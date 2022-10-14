import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  Programs,
  Projects,
  Schedule,
  Team,
} from "./pages/";
import { Footer, Navbar } from "./components/";
import "./styles/Global.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Programs" element={<Programs />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/schedule" element={<Schedule />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
