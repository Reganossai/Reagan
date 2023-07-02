import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link,useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: "100px 0px 0px 0px" })}
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  margin: 10px 0px

  box-shadow: 5px 8px 30px #848884;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px 10px 10px 0px;
  padding: 10px;
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 15px;
  margin: 5px 0px;
`;

const Already = styled.p`
  font-size: 15px;
  margin: 5px 0px;
`;

const Button = styled.button`
  width: 80px;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const result = (e) => {
    e.preventDefault();
    setLoading(true);
    setFormData({
      email: "",
      password: "",
      name: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
    });

    const body = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postalCode: formData.postalCode,
    };

    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/signup",
      data: body,
    })
      .then((response) => {
        if (response.data.success == true) {
          console.log(response.data);
          history.push("/registrationsuccess");
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "User Sign up failed due to some reason. Make sure you provided a valid email/password. This could also be as a result that the email/phone number provided is already taken"
        );
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <h1 className="login-loading">
        Please wait while your input is being validated
      </h1>
    );
  }

  return (
    <div className="register-div">
      <div className="bg"></div>
      <div className="bgg">
        <h1>CREATE AN ACCOUNT</h1>
        <form onSubmit={result} className="formis">
          <div className="inp">
            <label htmlFor="email">Email</label>
            <Input
              placeholder="ossaireagano@gmail.com"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="phone">Phone number</label>
            <Input
              placeholder="0808315163"
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="address">Address</label>
            <Input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="country">Country</label>
            <Input
              type="text"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="state">State</label>
            <Input
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="city">City</label>
            <Input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="inp">
            <label htmlFor="postalCode">Postal Code</label>
            <Input
              placeholder="100001"
              type="text"
              name="postalCode"
              required
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <div id="create-btn">
            <Button type="submit" className="btn btn-primary">
              CREATE
            </Button>

            <Link to="/signin">
              Already have an account? click the link to sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
