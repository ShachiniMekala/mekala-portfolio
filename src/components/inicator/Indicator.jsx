import "./indicator.scss";


const Indicator = ({menuOpen,activeIndex,setActiveIndex}) => {
    return ( 
        <div className={"indicator "+(menuOpen && "open")}>
            <ul>
                <a href="#aboutme"><li className = {activeIndex===1 ? 'selected' : ''} onClick={()=>setActiveIndex(activeIndex=1)}></li></a>
                <a href="#work"><li className = {activeIndex===2 ? 'selected' : ''} onClick={()=>setActiveIndex(activeIndex=2)}></li></a>
                <a href="#technologies"><li className = {activeIndex===3 ? 'selected' : ''} onClick={()=>setActiveIndex(activeIndex=3)}></li></a>
                <a href="#projects"><li className = {activeIndex===4 ? 'selected' : ''} onClick={()=>setActiveIndex(activeIndex=4)}></li></a>
                <a href="#interests"><li className = {activeIndex===5 ? 'selected' : ''} onClick={()=>setActiveIndex(activeIndex=5)}></li></a>
                <a href="#contact"><li className = {activeIndex===6 ? 'selected' : ''} onClick={()=>setActiveIndex(activeIndex=6)}></li></a>
               
            </ul>
        </div>
     );
}
 
export default Indicator;