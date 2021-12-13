import "./menu.scss";

const Menu = ({menuOpen,setMenuOpen,activeIndex,setActiveIndex}) => {
    return ( 
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
               <li onClick={()=>{setMenuOpen(!menuOpen); setActiveIndex(activeIndex=1);}}>
                   <a href="#aboutme">About Me</a>
                </li> 
                <li onClick={()=>{setMenuOpen(!menuOpen); setActiveIndex(activeIndex=2);}}>
                   <a href="#wok">Work</a>
                </li> 
                <li onClick={()=>{setMenuOpen(!menuOpen); setActiveIndex(activeIndex=3);}}>
                   <a href="#technologies">Technoloigies</a>
                </li> 
                <li onClick={()=>{setMenuOpen(!menuOpen); setActiveIndex(activeIndex=4);}}>
                   <a href="#projects">Projects</a>
                </li> 
                <li onClick={()=>{setMenuOpen(!menuOpen); setActiveIndex(activeIndex=5);}}>
                   <a href="#interests">Interests</a>
                </li> 
                <li onClick={()=>{setMenuOpen(!menuOpen); setActiveIndex(activeIndex=6)}}>
                   <a href="#contact">Contact</a>
                </li> 
            </ul>
        </div>
     );
}
 
export default Menu;