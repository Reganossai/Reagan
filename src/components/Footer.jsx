import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { mobile } from "../responsive";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.jpg";
import kinkiverse from "../assets/kinkiverselogo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div>
      <nav className="first-conti">
        <div className="hell">
          <img src={kinkiverse} className="kink" alt="kink" />

          <h4>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            
          </h4>
          <div className="foot-linko">
          <img src={whatsapp}/>
          
          
          <img src={linkedin}/>
          
          <img src={instagram}/>
          </div>
        </div>
        <div className="kirk">
          <h1 className="koko"><span><FontAwesomeIcon icon={faCopyright}/></span>2023 Kinkiverse Inc.</h1>
        </div>
        <hr className="hirrr"/>
        <div className="olo">
          <h1>Help</h1>
          <h1>Shop</h1>
          <h1>Products</h1>
          <h1>Cart</h1>
        </div>
        
      </nav>
    </div>
  );
};

export default Footer;
