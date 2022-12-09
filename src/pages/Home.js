import { Alert, Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { instance, auth } from "../api/axios";
import Ranking from "../components/Ranking";
import Navbar from "../components/Navbar";

function Home() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      auth.delete("/logout");
      console.log("Logged Out");
      localStorage.removeItem("accessToken");
      setSuccess(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="h-100 container my-3 d-flex row justify-content-center m-auto align-items-center">
        <div className="py-5 my-3 bg-white rounded-3">
          <h1 className="display-5 mb-3 fw-bold text-center">TrendTracker</h1>
          <p className="fs-4 text-center">
            Welcome to TrendTracker, an AI-powered Product demand forecasting
            tool.{" "}
          </p>
        </div>

        <div className="p-5 mb-4 bg-white rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">
              Want to know the trend of products?
            </h1>
            <p className="col-md-8 fs-4">
              TrendTracker utilizes Artificial Intelligence to estimate the
              time-of-life that a product stays trending based on metrics from
              different social media platforms.
            </p>
            <NavLink to="/products" className="btn btn-primary btn-lg">
              Check Products
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
