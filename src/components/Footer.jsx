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
import telegram from "../assets/telegram.jpg";
import reddit from "../assets/reddit.jpg";
import email from "../assets/email.png";
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
            Welcome to Kinkiverse, the best shopping platform for your men's
            clothing wears, female clothing wears, gadgets/electronics and
            jewelery. Enjoy our personal shopper experience.
          </h4>
          <div className="foot-linko">
            <img src={telegram} />

            <img src={reddit} />

            <img src={email} />
          </div>
        </div>
        <div className="kirk">
          <h1 className="koko">
            <span>
              <FontAwesomeIcon icon={faCopyright} />
            </span>
            2023 Kinkiverse Inc.
          </h1>
        </div>
        <hr className="hirrr" />
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
