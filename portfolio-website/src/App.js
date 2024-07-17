import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Gallery from "./pages/Gallery/Gallery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Max Judkevitch";
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/contactMe" exact Component={ContactMe} />
        <Route path="/projects" exact Component={Projects} />
        <Route path="/resume" exact Component={Resume} />
        <Route path="/gallery" exact Component={Gallery} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
