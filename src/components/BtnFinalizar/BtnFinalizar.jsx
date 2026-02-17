import './BtnFinalizar.css';

import './BtnFinalizar.css';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestore } from '../../../src/utils/firebase'; 
import { useState } from 'react';

const BtnFinalizar = () => {
  const { cart, clearCart } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleFinalizar = async () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    setLoading(true);

    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

    const compra = {
      productos: cart,
      total,
      fecha: Timestamp.now(),
      estado: "generada"
    };

    try {
      await addDoc(collection(firestore , "compras"), compra);
      clearCart();
      localStorage.removeItem("cart");
      alert("Compra finalizada con éxito!");
    } catch (error) {
      console.error("Error al guardar la compra:", error);
      alert("No se pudo procesar la compra. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="buttons-container">
      <button className="btn-finalizar" onClick={handleFinalizar} disabled={loading}>
        {loading ? "Procesando..." : "Finalizar compra"}
      </button>
    </div>
  );
};

export { BtnFinalizar };