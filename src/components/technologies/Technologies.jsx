import "./technologies.scss";
const Technologies = ({setActiveIndex}) => {
    return ( 
    <div className="technologies" id="technologies"  onWheel={ event => { (event.nativeEvent.wheelDelta > 0) ? setActiveIndex(2) : setActiveIndex(4)}}>

    </div> 
    );
}
 
export default Technologies;