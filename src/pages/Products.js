import React from "react";
import Ranking from "../components/Ranking";
function Products() {
  const items = [
    {
      name: "Product 1",
      description: "This is the first product",
      id: 123,
    },
    {
      name: "Product 2",
      description: "This is the second product",
      id: 456,
    },
    {
      name: "Product 3",
      description: "This is the third product",
      id: 789,
    },
    {
      name: "Product 4",
      description: "This is the fourth product",
      id: 101112,
    },
  ];
  return (
    <>
      <div className="bg-white rounded-3 py-3 container">
        <h1 className="m-5 text-center">Products</h1>
      </div>
      <Ranking listData={items} listType={0} />
    </>
  );
}

export default Products;
