import React from "react";
import trash from "../../components/trash.png";
import s from "./History.module.css";
import { useState } from "react";
const History = (props) => {
  function deleteHistory(id) {
    debugger;
    for (let i = 0; i < props.history.length; i++) {
      if (props.history[i].id == id) {
        props.history[i].status = false;
      }
    }
    props.rerenderTree();
  }

  return (
    <div className={s.history_block}>
      {props.history.length != 0 ? (
        props.history.map((item) =>
          item.status ? (
            <div className={s.history_inner}>
              <div className={s.hisory_top}>
                <div className={s.from}>
                  <div className={s.from_title}>{item.from_title}</div>
                  <div className={s.money_title}>{item.money}</div>
                </div>
                <div className={s.to_title}>{item.to_title}</div>
              </div>
              <div className={s.history_bottom}>
                <img
                  className={s.delete}
                  src={trash}
                  onClick={(e) => deleteHistory(item.id)}
                ></img>
              </div>
            </div>
          ) : (
            ""
          )
        )
      ) : (
        <>
          <div className={s.title}>ПОНЕДЕЛЬНИК, 3 апреля</div>
          <div>
            Здесь будет список ваших операций, в котором вы всегда сможете найти
            историю ваших покупок, отредактировать, повторить или удалить их
          </div>
        </>
      )}
    </div>
  );
};

export default History;
