import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

function Product() {
  const location = useLocation();
  const { posts } = location.state;
  const { id } = useParams();
  console.log(posts);
  return (
    <div className="container ">
      <h1 className="card m-5 p-5">Posts about {id}</h1>
      <div className="container d-flex justify-content-around m-auto align-items-center">
        <ProductList items={posts} />
      </div>
    </div>
  );
}

function ProductList(props) {
  const data = props.items;
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <div className="col-12 mb-1" key={index}>
          <div className="container col-12 d-flex col justify-content-center align-items-around">
            <div className=" flex-shrink-0 card col-3 col-lg-1  border rounded-2 text-center d-flex justify-content-center align-items-center">
              <h5>{index + 1}</h5>
            </div>
            <div className="col-8 col-lg-9 card">
              <div className="card-body justify-content-center">
                <h5 className="card-title">Post by {item.url.split("/")[3]}</h5>
                <p className="card-text">{item.post}</p>
                <p className="card-text">Points: {item.points}</p>
                <a href={item.url} className="btn btn-primary mx-1">
                  Go to Post
                </a>

                <a
                  href={"https://tiktok.com/" + item.url.split("/")[3]}
                  className="btn btn-danger mx-1"
                >
                  Go to Account
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Product;
