import React from "react";
import { useCartContext } from "../../context/CartContext";
import { CountP } from "../CountProduct/CountP.jsx";
import "./ModalCart.css";

const ModalCart = () => {
  const { cart, removeFromCart, clearCart } = useCartContext();

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="modal-cart">
      <h3>Tu Carrito</h3>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="modal-cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img className="img-modal" src={`/${item.imagen}`} alt={item.nombre} />
                <h4>{item.nombre}</h4>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.precio}</p>
                
                

              </div>
              
            ))}
             <p className="total-art">Total de artículos: {totalItems}</p>
            <p className="cart-total">Total: ${total}</p>
          </div>

        </>
      )}
    </div>
  );
};

export { ModalCart };
