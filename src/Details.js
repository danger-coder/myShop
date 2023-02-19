import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "./Products";
import "./Details.css";

function Details() {
  let { id } = useParams();
  var kk = products.find((e) => e.id == id);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-lg-3 ">
          <button
            onClick={() => navigate(-1)}
            className="btn bg-primary text-white "
          >
            back
          </button>
          <img src={kk.image} className="img-fluid" />
        </div>
        <div className="col-lg-9 d-flex align-items-start justify-content-center flex-column">
          <p>
            {" "}
            <span>name:</span>
            {kk.title}
          </p>
          <p>
            <span>Price:</span> <span className="con">$</span>
            {kk.price}
          </p>
          <p>
            <span>description:</span>
            {kk.description}
          </p>
          <a className="btn bg-primary text-white">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Details;
