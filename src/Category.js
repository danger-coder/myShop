import React from "react";
import products from "./Products";
import { Link, useParams } from "react-router-dom";

function Category() {
  let { cid } = useParams();

  var dd = products.filter((f) => f.category === cid);

  return (
    <div className="container">
      <div className="row py-4">
        {dd.map((pp) => (
          <div className="col-lg-3 py-2 kk">
            <div className="imgbox">
              <img src={pp.image} className="img-fluid" />
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
  );
}

export default Category;
