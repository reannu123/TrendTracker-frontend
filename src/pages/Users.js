import React from "react";
import Ranking from "../components/Ranking";
import { Link } from "react-router-dom";
function Users() {
  const items = [
    {
      name: "User 1",
      description: "This is the first user",
      id: 123,
    },
    {
      name: "User 2",
      description: "This is the second user",
      id: 456,
    },
    {
      name: "User 3",
      description: "This is the third user",
      id: 789,
    },
    {
      name: "User 4",
      description: "This is the fourth user",
      id: 101112,
    },
  ];
  return (
    <>
      <div className="bg-white rounded-3 py-3 container">
        <h1 className="m-5 text-center">Users</h1>
      </div>
      <Ranking listData={items} />
    </>
  );
}

export default Users;
