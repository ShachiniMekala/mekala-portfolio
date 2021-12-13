import "./interests.scss";
const Interests = ({setActiveIndex}) => {
    return ( 
        <div className="interests" id="interests"  onWheel={ event => { (event.nativeEvent.wheelDelta > 0) ? setActiveIndex(4) : setActiveIndex(6)}}>

        </div>
     );
}
 
export default Interests;