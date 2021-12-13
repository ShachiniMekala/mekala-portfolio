import "./aboutme.scss";
import ProfImg from "../../Assets/MyCasualcropped.png";

const Aboutme = ({setActiveIndex}) => {
    return ( 
        <div className="aboutme" id="aboutme" onWheel={ event => { (event.nativeEvent.wheelDelta < 0) ? setActiveIndex(2): setActiveIndex(1) }}>
        <div className="left">
        <div className="profile">
                    <h1>SHACHINI MEKALA</h1>
                    <h2>Web Developer</h2>
                    <p>Hey there! I'm final year undergraduate from the Faculty of Information Technology, University of Moratuwa, Sri Lanka</p>
        </div>
        </div>
        <div className="right">
            <div className="imageContainer">
            <img src={ProfImg} alt=""></img>
            </div>
        </div>
        </div>
     );
}
 
export default Aboutme;