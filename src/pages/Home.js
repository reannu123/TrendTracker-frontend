import { Alert, Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance, auth } from "../api/axios";
import '../main.css';
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
        <div className="container py-5 my-5 border rounded-3 d-flex row justify-content-center m-auto">
          
          <div class="p-5">
            <h1 className="display-5 mb-5 fw-bold text-center">TrendTracker</h1> 
            <p className="lead text-center">Welcome to TrendTracker, an AI-powered Product demand forecasting tool. </p>
          </div>
          <div class="px-5">
            <hr/>
          </div>
          <div className="p-5 input-group w-75 column align-items-center">
            <input type="search" placeholder="Search for a category" className="form-control" />
            <button type="button" class="btn btn-outline-primary">SEARCH</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
