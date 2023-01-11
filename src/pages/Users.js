import React from "react";
import Ranking from "../components/Ranking";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  // Create a state to store the data
  const [items, setItems] = React.useState([]);

  // Create a function to fetch data from api
  const fetchItems = async () => {
    const result = await axios(`http://188.166.228.122:5000/api/users`);
    setItems(result.data);
  };

  // Call the function to fetch data from api
  React.useEffect(() => {
    fetchItems();
  }, []);

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
