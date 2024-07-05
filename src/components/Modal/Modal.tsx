import React from "react";
import "./Modal.scss";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * * Modal - Displays a modal
 * @param {Function} onClose - The function to close the modal
 * @param {React.ReactNode} children - The children to display in the modal
 * @returns {React.FunctionComponent}
 */
const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
