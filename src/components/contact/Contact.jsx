import "./contact.scss";
const Contact = ({setActiveIndex}) => {
    return ( 
        <div className="contact" id="contact"  onWheel={ event => { (event.nativeEvent.wheelDelta > 0) ? setActiveIndex(5) : setActiveIndex(6)}}>
        Contact me
        </div>
     );
}
 
export default Contact;