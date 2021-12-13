import { Facebook,LinkedIn,Instagram  } from '@material-ui/icons';
import "./socialmedia.scss";

const SocialMedia = () => {
    return ( 
        <div className="iconwrapper">
            <a href='https://www.linkedin.com/in/shachini-karunarathne/'><LinkedIn className='icon' > </LinkedIn> </a>
            <a href='https://www.facebook.com/shachini.mekala.9'><Facebook className='icon'></Facebook></a>
            <a href='https://www.instagram.com/mekala_shachi/'><Instagram className='icon'></Instagram></a>
        </div>
     );
}
 
export default SocialMedia;