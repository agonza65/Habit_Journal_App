import React, { useState } from "react";
import "./modal.css";
import { TiPencil, TiTrash } from "react-icons/ti";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        <TiPencil />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Title of Journal Entry</h2>
            <p>
              **input title** <br/>
              **input description** <br/>
              ** add any picture/audio/location ***
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}