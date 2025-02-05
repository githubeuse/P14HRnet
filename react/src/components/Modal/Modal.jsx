import PropTypes from "prop-types";
import "./Modal.css";

/**
 * Le composant Modal affiche une fenêtre modale avec un message et un bouton de fermeture.
 * @param {boolean} isOpen - Détermine si la modale est visible ou cachée.
 * @param {function} onClose - Fonction appelée lorsque l'utilisateur clique sur le bouton de fermeture.
 */

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span>Employee Created!</span>
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
