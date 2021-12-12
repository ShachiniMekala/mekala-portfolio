import "./menu.scss";

const Menu = ({menuOpen,setMenuOpen}) => {
    return ( 
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
               <li onClick={()=>setMenuOpen(!menuOpen)}>
                   <a href="#aboutme">About Me</a>
                </li> 
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                   <a href="#wok">Work</a>
                </li> 
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                   <a href="#technologies">Technoloigies</a>
                </li> 
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                   <a href="#projects">Projects</a>
                </li> 
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                   <a href="#interests">Interests</a>
                </li> 
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                   <a href="#contact">Contact</a>
                </li> 
            </ul>
        </div>
     );
}
 
export default Menu;