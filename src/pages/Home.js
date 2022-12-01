import { Alert, Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance, auth } from "../api/axios";

function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      auth.delete("/logout");
      console.log("Logged Out")
      localStorage.removeItem("accessToken");
      setSuccess(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {(
        <Container className="py-5 my-5 border rounded-3 d-flex align-items-center justify-content-center">
          
          <Form onSubmit={handleLogout}>
          <h1 className="mb-5 text-center">HOME</h1> 
          <Button variant="primary" type="submit">
              Log Out
            </Button>
            <Button variant="primary" onClick={()=>{navigate('/login')}}>
              Log In
            </Button>
            <Button variant="primary" onClick={()=>{navigate('/register')}}>
              Register
            </Button>
            </Form>
          
        </Container>
      )}
    </>
  );
}

export default Home;
