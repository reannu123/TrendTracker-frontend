import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="container">
      <h1 className="m-5 pb-5 border-bottom">User {id}</h1>
    </div>
  );
}

export default User;
