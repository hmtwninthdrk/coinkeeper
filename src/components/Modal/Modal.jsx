import React from "react";
import s from "./Modal.module.css";
import a from "../../img/books.png";
const Modal = (props) => {
  let defaultIconsIncome = [
    "books.png",
    "credit-card.png",
    "fork.png",
    "monitor.png",
  ];

  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "content active" : "content"}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
      <div className={s.modal_right}>
        <img src="" alt="" />
        <div>
          {defaultIconsIncome.map((item) => (
            <img src={`/img/${item}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
