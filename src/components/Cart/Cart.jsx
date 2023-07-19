import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {  FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  
  const config = {
    public_key: 'FLWPUBK-62dbbc23f0bc909463b116528ca791c2-X',
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'ossaireagano@gmail.com',
      phone_number: '08108315163',
      name: 'Reagan Ossai',
    },
    customizations: {
      title: 'Buy Reagan A Coffee',
      description: 'Coffee for Reagan',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };


const fwConfig = {
...config,
text: 'Proceed to Checkout',
callback: (response) => {
console.log(response);
closePaymentModal() // this will close the modal programmatically
},
onClose: () => {},
};



  return (
    <div className="product-container-singleitem">
      <h1><Link to="/prod"><span><FontAwesomeIcon icon={faArrowLeftLong} className="single-item-fontawesome"/></span>Go Back to Products</Link></h1>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="product-container-singleitem" >
        <h4 >Cart Summary</h4>
        <div>
          <span  className="summ">TOTAL: ({totalItems} items)</span>
          <span  className="summ">$ {totalPrice}</span>
        </div>
        <FlutterWaveButton {...fwConfig} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);








// import { Add, Remove } from "@material-ui/icons";
// import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { mobile } from "../responsive";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: "10px" })}
// `;


// const Top = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
// `;

// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}

// `;

// const Info = styled.div`
//   flex: 3;
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;

// const Image = styled.img`
//   width: 200px;
// `;

// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const ProductName = styled.span``;

// const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styled.span``;

// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Cart = () => {
  
//   return (
//     <Container>
//       <Navbar />
//       <Announcement />
//       <Wrapper>
//         <Top>
//           <TopButton>CONTINUE SHOPPING</TopButton>
         
//         </Top>
//         <Bottom>
//           <Info>
//             <Product>
//               <ProductDetail>
//                 <Image src={Product.image}/>
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b> JESSIE THUNDER SHOES
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b> 93813718293
//                   </ProductId>
//                   <ProductColor color="black" />
//                   <ProductSize>
//                     <b>Size:</b> 37.5
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>2</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$ 30</ProductPrice>
//               </PriceDetail>
//             </Product>
//             <Hr />
//             <Product>
//               <ProductDetail>
//                 <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b> HAKURA T-SHIRT
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b> 93813718293
//                   </ProductId>
//                   <ProductColor color="gray" />
//                   <ProductSize>
//                     <b>Size:</b> M
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>1</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$ 20</ProductPrice>
//               </PriceDetail>
//             </Product>
//           </Info>
//           <Summary>
//             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//             <SummaryItem>
//               <SummaryItemText>Subtotal</SummaryItemText>
//               <SummaryItemPrice>$ 80</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Estimated Shipping</SummaryItemText>
//               <SummaryItemPrice>$ 5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount</SummaryItemText>
//               <SummaryItemPrice>$ -5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem type="total">
//               <SummaryItemText>Total</SummaryItemText>
//               <SummaryItemPrice>$ 80</SummaryItemPrice>
//             </SummaryItem>
//             <Button>CHECKOUT NOW</Button>
//           </Summary>
//         </Bottom>
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// };

// export default Cart;
