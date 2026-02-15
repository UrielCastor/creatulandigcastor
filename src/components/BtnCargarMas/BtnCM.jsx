import "./BtnCM.css";
const CargarButton = ({ onClick, disabled = false }) => {
  return (
    <button
      className="btn btn-mas"
      onClick={onClick}
      disabled={disabled}
    >
      Cargar Mas ↓
    </button>
  );
}
export { CargarButton };