import React from "react";
import { Link } from "react-router-dom";

function Ranking(props) {
  return Items(props.listData);
}

function Items(data) {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 my-3 text-center">
            <h1>Current Rankings</h1>
          </div>
          {data.map((item, index) => (
            <div className="col-12 mb-1" key={index}>
              <div className="col-12 d-flex col justify-content-center">
                <div className=" card col-1 border rounded-2 text-center d-flex justify-content-center align-items-center">
                  <h5>{index + 1}</h5>
                </div>
                <div className="col-8 card bg-black">
                  <img src="default.png" className="thumbnail" alt="..." />
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
                  <div className=" card-footer text-muted">
                    <div className="row">
                      <div className="col-6">
                        <h6>Price</h6>
                        <p>{item.name}</p>
                      </div>
                    </div>
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
