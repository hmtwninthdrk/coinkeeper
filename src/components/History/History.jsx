import React from "react";
import s from "./History.module.css";
const History = (props) => {
  return (
    <div className={s.history_block}>
      {props.history.length != 0 ? (
        props.history.map((item) => (
          <div className={s.history_inner}>
            <div className={s.hisory_top}>
              <div className={s.from}>
                <div className={s.from_title}>{item.from_title}</div>
                <div className={s.money_title}>{item.money}</div>
              </div>
              <div className={s.to_title}>{item.to_title}</div>
            </div>
            <div className={s.history_bottom}>
              <div className={s.currentToMoney}></div>
              <div>Баланс</div>
              <div className={s.money_title}></div>
              <div>Итого</div>
            </div>
          </div>
        ))
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
