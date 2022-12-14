import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import { Home, Contact, Programs, Projects, Schedule, Team } from "./pages/";
import { Footer, Navbar, MobileNavabar, ToggleButtons } from "./components/";
import "./styles/Global.css";

export const ThemeContext = createContext(null);
function App() {
  // for light / dark theme
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");

    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <Navbar theme={theme} />
          <ToggleButtons onChange={toggleTheme} checked={theme === "dark"} />
          <div className="routeContainer">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/Programs" element={<Programs />}></Route>
              <Route path="/project" element={<Projects />}></Route>
              <Route path="/schedule" element={<Schedule />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route
                path="/Mobile"
                element={<MobileNavabar theme={theme} />}
              ></Route>
            </Routes>
          </div>
          <Footer theme={theme} />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
