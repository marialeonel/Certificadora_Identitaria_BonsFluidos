import React from "react";

function CloseButton({ onClose, className }) {
  return (
    <button
      onClick={onClose}
      type="button"
      aria-label="Fechar"
      className={`bg-gray-200 h-6 w-6 rounded-full text-gray-600 text-xs font-medium hover:bg-gray-300 flex items-center justify-center transition duration-300 ${className}`}
    >
      &times;
    </button>
  );
}

export default CloseButton;
