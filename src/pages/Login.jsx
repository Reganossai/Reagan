import styled from "styled-components";
import { mobile } from "../responsive";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 5px 8px 30px #848884;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Login = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [signinResponse, setSigninResponse] = useState([]);
  const [loading,setLoading] = useState(false);

  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    });

    const body = {
      email: formData.email,
      password: formData.password,
    };
  
    axios({
      method: "post",
      url: "https://kinkiverse.onrender.com/users/signin",
      data: body,
    })
      .then((response) => {
        
        if(response.data.success == true){
          console.log(response.data);
        history.push("/prod");
        } else{
         

        // const token = response.data.token;
        }
        // setSigninResponse(response.data);
        // setLoading(false);
      
      })
      .catch((error) => {
        console.log(error);
        toast.error("User Login failed due to some reasons");
        setLoading(false);
      })
      
      
  };

  if(loading){
    return<h1 className="login-loading">Please wait while your login credentials are being validated</h1>
  }


  return (
    <div>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={result}>
            <div className="inp">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" >
              LOGIN
            </Button>
            <Link to="/signup">CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
