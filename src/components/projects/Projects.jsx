import "./projects.scss";
const Projects = ({setActiveIndex}) => {
    return ( 
        <div className="projects" id="projects"  onWheel={ event => { (event.nativeEvent.wheelDelta > 0) ? setActiveIndex(3) : setActiveIndex(5)}}>

        </div>
     );
}
 
export default Projects;