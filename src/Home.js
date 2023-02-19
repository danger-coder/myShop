import React from "react";
import Cat from "./CatData";
import products from "./Products";
import img from "./daraz.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      {" "}
      <div className="bg-light">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3">
              {Cat.map((p) => (
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link
                      to={`/category/${p.id}`}
                      className="text-decoration-none link-dark"
                    >
                      {p.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="col-lg-9">
              <img className="img-fluid" src={img} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <h3 className="text-start hh">
          Our Latest Products <span></span>
        </h3>
        <div className="row py-4">
          {products.map((pp) => (
            <div className="col-lg-3 py-2 kk">
              <div className="imgbox">
                <img src={pp.image} className="img-fluid" alt="yffgh" />
              </div>
              <div className="card-body">
                <p>{pp.title}</p>
                <p className="price">${pp.price}</p>

                <Link
                  to={`/details/ ${pp.id}`}
                  className="btn bg-primary text-white my-2"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
