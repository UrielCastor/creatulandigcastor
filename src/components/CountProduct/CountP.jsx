import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./CountP.css";

const CountP = ({ quantity, id, updateQuantity }) => {

  const suma = () => {
    updateQuantity(id, quantity + 1);
  };

  const resta = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter-btn" onClick={resta}>−</button>
      <input
        className="counter-input"
        type="number"
        value={quantity}
        readOnly
      />
      <button className="counter-btn" onClick={suma}>+</button>
    </div>
  );
};


export { CountP };