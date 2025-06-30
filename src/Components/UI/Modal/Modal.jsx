import React from "react";
import ModalStyle from "./Modal.module.css";
import Form from "../../Form/Form";
import Sound from "../../Sounds/ui-mouse-click-366460.mp3";
const Modal = ({ setModalPopUp, dataHandler, setIfNoList }) => {
  const closeHandler = () => {
    setModalPopUp(false);
    const clickSound = new Audio(Sound);
    clickSound.play();
  };
  const backdropHandler = () => {
    setModalPopUp(false);
  };
  return (
    <div className={ModalStyle}>
      <div className={ModalStyle.backdrop} onClick={backdropHandler} />
      <div className={ModalStyle["modal-content"]}>
        <div className={ModalStyle["modal-header"]}>
          <span onClick={closeHandler} className={ModalStyle["close"]}>
            &times;
          </span>
          <h2>To-do List</h2>
        </div>
        <div className={ModalStyle["modal-body"]}>
          <Form dataHandler={dataHandler} setIfNoList={setIfNoList} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
