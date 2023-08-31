import React from "react";
import style from "./modal.module.scss";
import Button from "../../shared/ui/Button/Button";

function Modal({ children, visible, setVisible }) {
  function closeModal() {
    setVisible(!visible);
  }
  const modalClass = visible
    ? [style.modalExternalWrapper, style.active].join(" ")
    : style.modalExternalWrapper;
  return (
    <div className={modalClass} onClick={closeModal}>
      <div
        className={style.modalConteiner}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          value="close"
          onClick={closeModal}
          className={style.closeModalBtn}
        />
        <div className={style.modalInputs}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
