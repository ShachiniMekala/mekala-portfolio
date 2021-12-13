import "./work.scss"
const Work = ({setActiveIndex}) => {
    return ( 
        <div className="work" id="work" onWheel={ event => { (event.nativeEvent.wheelDelta > 0) ? setActiveIndex(1) : setActiveIndex(3)}}>
   
        </div>
     );
}
 
export default Work;
