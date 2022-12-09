import { Alert, Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance, auth } from "../api/axios";
import "../main.css";
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
    <div className="">
      <div className="h-100 container my-3 d-flex row justify-content-center m-auto align-items-center">
        <div className="py-5 border-bottom">
          <h1 className="display-5 mb-3 fw-bold text-center">TrendTracker</h1>
          <p className="lead text-center">
            Welcome to TrendTracker, an AI-powered Product demand forecasting
            tool.{" "}
          </p>
        </div>

        <div class="p-5 mb-4 bg-white rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
