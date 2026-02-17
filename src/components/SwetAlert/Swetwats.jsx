import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

const WhatsAppLink = () => {

  const handleClick = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "info",
      title: "Página de prueba",
      text: "Este botón de WhatsApp es solo una demo",
      confirmButtonText: "Entendido",
      confirmButtonColor: "#25D366",
    });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#25D366",
        fontSize: "18px",
        cursor: "pointer"
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      WhatsApp
    </a>
  );
};
const finalizarcompra = () => {
  Swal.fire({
    icon: "success",  
    title: "Compra finalizada",
    text: "¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#25D366",
  });
} 
const errorcompra = () => {
  Swal.fire({
    icon: "error",
    title: "Error en la compra",
    text: "Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#25D366",
  });
} 
const vaciarcarrito = () => {
  Swal.fire({
    icon: "success",
    title: "Carrito vaciado",
    text: "Tu carrito ha sido vaciado exitosamente.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#25D366",
  });
}
const borrarproduct = () => {
  Swal.fire({
    icon: "success",
    title: "Producto eliminado",
    text: "El producto ha sido eliminado del carrito.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#25D366",
  });
}
const carritovacio = () => {
  Swal.fire({
    icon: "warning",
    title: "Carrito vacío",
    text: "Tu carrito está vacío. Agrega productos para finalizar tu compra.",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#25D366",
  });
}
export {WhatsAppLink, finalizarcompra, errorcompra, carritovacio,vaciarcarrito, borrarproduct};
