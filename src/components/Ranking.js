import React from "react";
import { Link } from "react-router-dom";

function Ranking(props) {
  if (props.listType) {
    return UserItems(props.listData);
  } else {
    return ProductItems(props.listData);
  }
}

function UserItems(data) {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 my-3 text-center">
            <h1>Current Rankings</h1>
          </div>
          {data.map((item, index) => (
            <div className="col-12 mb-1" key={index}>
              <div className="container col-12 d-flex col justify-content-center align-items-around">
                <div className=" flex-shrink-0 card col-3 col-lg-1  border rounded-2 text-center d-flex justify-content-center align-items-center">
                  <h5>{index + 1}</h5>
                </div>
                <div className="d-none p-2 flex-grow-0  d-lg-flex card col-3 col-lg-2 border rounded-2 text-center">
                  <img src={item.avatar} className="img-thumbnail" alt="..." />
                </div>
                <div className="col-5 col-lg-6 card">
                  <div className="card-body justify-content-center">
                    <h5 className="card-title">{item.username}</h5>
                    <p className="card-text">Points: {item.points}</p>
                    <p className="card-text">Positivity: {item.positivity}</p>
                    <p className="card-text">Hashtags: {item.hashtags}</p>

                    <Link
                      to={window.location.pathname + "/" + item.username}
                      className="btn btn-primary mx-1"
                    >
                      Check Details
                    </Link>
                    <a
                      href={"http://tiktok.com/@" + item.username}
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
      </div>
    </>
  );
}

function ProductItems(data) {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 my-3 text-center">
            <h1>Current Rankings</h1>
          </div>
          {data.map((item, index) => (
            <div className="col-12 mb-1" key={index}>
              <div className="container col-12 d-flex col justify-content-center align-items-around">
                <div className=" flex-shrink-0 card col-3 col-lg-1  border rounded-2 text-center d-flex justify-content-center align-items-center">
                  <h5>{index + 1}</h5>
                </div>
                <div className="d-none p-2 flex-grow-0  d-lg-flex card col-3 col-lg-2 border rounded-2 text-center">
                  <img src="default.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-5 col-lg-6 card">
                  <div className="card-body justify-content-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link
                      to={window.location.pathname + "/" + item.id}
                      className="btn btn-primary"
                    >
                      Check Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ranking;
