import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../components/store/slices/items";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDetails = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100 ")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">All Products</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm position-relative border-0">
                <span
                  className={`badge position-absolute top-0 start-0 m-2 px-3 py-2 ${
                    product.stock > 10 ? "bg-success" : "bg-danger"
                  }`}
                >
                  {product.stock > 10 ? "In Stock" : "Out of Stock"}
                </span>

                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                </Link>

                <div className="card-body text-center">
                  <h5 className="card-title mb-2">{product.title}</h5>
                  <hr />
                  <p className="card-text mb-1">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Rating:</strong> {product.rating}
                  </p>
                </div>

                <div className="card-footer bg-white border-0 d-flex justify-content-around">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => showDetails(product.id)}
                  >
                    Show Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
