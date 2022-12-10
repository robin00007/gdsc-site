import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import {
  Home,
  Contact,
  Programs,
  Projects,
  Schedule,
  Team,
} from "./pages/";
import { Footer, Navbar, MobileNavabar, ToggleButtons } from "./components/";
import "./styles/Global.css";

export const ThemeContext = createContext(null);
function App() {

  // for light / dark theme
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div id={theme}>
        <Router>
          <Navbar theme={theme}/>
          <ToggleButtons onChange={toggleTheme} checked={theme === "dark"}/>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/Programs" element={<Programs />}></Route>
              <Route path="/project" element={<Projects />}></Route>
              <Route path="/schedule" element={<Schedule />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/Mobile" element={<MobileNavabar theme={theme}/>}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
