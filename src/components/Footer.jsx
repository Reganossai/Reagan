import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import kinkiverse from "../assets/kinkiverselogo.jpeg"


const Container = styled.div`
  display: flex;
  border-top: 1px dotted #36454F;
  ${mobile({ display: "none"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;


const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <div>
    <Container>
      <Left>
        <h1 className="logo">Bawdy</h1>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      
    </Container>



    <nav className="first-conti">
        <div className="hell">
        <img src={kinkiverse} className="kink" alt="kink"/>
        </div>
        <div className="kirk">
          <div className="ig-div">
            <a href="https://www.instagram.com/reganossai">
              <img
                src="data:image/jpeg;base64,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"
                alt="ig"
                className="ig"
              />
            </a>
            <a href="https://www.instagram.com/reganossai">
              <h5>Instagram</h5>
            </a>
          </div>

          <div className="whatsapp-div">
            <a
              href="https://wa.me/+2348108315163"
              target="_blank"
              rel="noreferrer"
            >
             <img src={whatsapp} alt="whatsapp" className="whatsapp" />
            </a>
            <a
              href="https://wa.me/+2348108315163"
              target="_blank"
              rel="noreferrer"
            >
              <h5>Whatsapp</h5>
            </a>
          </div>

          <div className="linkedin-div">
            <a
              href="https://www.linkedin.com/in/reagan-ossai-2212971b5/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="linkedin" />
            </a>
            <a href="#">
              <h5>Linkedin</h5>
            </a>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Footer;
