import { Alert, Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { instance, auth } from "../api/axios";

function NotFound() {
  return (
    <>
      {
        <Container className="py-5 my-3 bg-white rounded-3">
          <h1 className="text-center display-5 fw-bold text-center">
            Coming Soon
          </h1>
        </Container>
      }
    </>
  );
}

export default NotFound;
