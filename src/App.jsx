import Topbar from "./components/topbar/Topbar";
import Aboutme from "./components/aboutme/Aboutme";
import Work from "./components/work/Work";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Interests from "./components/interests/Interests";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <Aboutme/>
      <Work/>
      <Technologies/>
      <Projects/>
      <Interests/>
      <Contact/>
    
    </div>
    </div>
  );
}

export default App;
