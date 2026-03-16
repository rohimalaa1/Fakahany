import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, isLoggedIn }) {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const decrease = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  const increase = () => setQuantity(prev => prev + 1);

  const handleBuy = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (quantity === 0) {
      alert("Please select quantity first!");
    } else {
      alert(
        `You bought ${quantity} ${product.name}(s) for $${(
          product.price * quantity
        ).toFixed(2)}`
      );
    }
  };

  return (
    <div className="card h-100 shadow-sm product-card">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "250px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column justify-content-between text-center">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="price text-success fw-bold">${product.price}</p>
        </div>

        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 my-2">
          <button
            className="btn btn-outline-danger btn-sm flex-grow-1"
            onClick={decrease}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="text-center border rounded flex-grow-1"
            style={{ maxWidth: "60px", minWidth: "50px", height: "35px" }}
          />
          <button
            className="btn btn-outline-success btn-sm flex-grow-1"
            onClick={increase}
          >
            +
          </button>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <button
            className="btn btn-primary buy"
            style={{ width: "100%", maxWidth: "200px" }}
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;