import Topbar from "./components/topbar/Topbar";
import Aboutme from "./components/aboutme/Aboutme";
import Work from "./components/work/Work";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Interests from "./components/interests/Interests";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import {useState } from "react";
import Indicator from "./components/inicator/Indicator";
import Counter from "./components/inicator/Counter";
import SocialMedia from "./components/socialMedia/SocialMedia";


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [activeIndex,setActiveIndex] = useState(1);

  return (
    <div className="app">
    <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen} activeIndex ={activeIndex} setActiveIndex={setActiveIndex} />
    <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen} activeIndex ={activeIndex} setActiveIndex={setActiveIndex} />
    <Counter activeIndex ={activeIndex}/>
    <SocialMedia/>
    <Indicator menuOpen = {menuOpen} activeIndex ={activeIndex} setActiveIndex={setActiveIndex} />
    
    <div className="sections">
      <Aboutme setActiveIndex={setActiveIndex}/>
      <Work setActiveIndex={setActiveIndex} />
      <Technologies setActiveIndex={setActiveIndex} />
      <Projects setActiveIndex={setActiveIndex} />
      <Interests setActiveIndex={setActiveIndex}/>
      <Contact setActiveIndex={setActiveIndex}/>
    
    </div>
    </div>
  );
}

export default App;
