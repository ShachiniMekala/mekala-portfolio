import "./topbar.scss";
import { PhoneInTalk,Email, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const Topbar = ({menuOpen,setMenuOpen,activeIndex,setActiveIndex }) => {
    return ( 
        <div className={"topbar "+(menuOpen && "active")} id="topbar">
            
        <div className="wrapper">
            <div className="left">
                <a href="#aboutme" className="namelogo" onClick={()=>setActiveIndex(activeIndex=1)}> <ArrowBackIos/>Shachini Mekala /<ArrowForwardIos/></a>
                <div className="itemContainer">
                <PhoneInTalk/>
                <a className="details" href="tel:+94712212515">(+94) 71-2212 515</a>
                <span className="space"></span>
                <Email/>
                <a  className="details" href="mailto:shachinikarunarathne2016@gmail.com"> shachinikarunarathne2016@gmail.com </a>
            </div>
            </div>
           
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
        
        </div>
     );
}
 
export default Topbar;