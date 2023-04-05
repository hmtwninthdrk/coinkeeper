import React, { useState } from "react";
import s from "./HeaderInput.module.css";
const HeaderInput = (props) => {
  const [selectorFrom, setSelectorFrom] = useState("");
  const [selectorTo, setSelectorTo] = useState("");

  const [money, setMoney] = useState("");
  let incomeOptions = props.data.map((item) =>
    item.title == "Income" ? <option value={item.name}>{item.name}</option> : ""
  );
  function rerend() {
    props.rerenderTree();
  }

  function transfer() {
    let copyData = props.data;

    for (let i = 0; i < props.data.length; i++) {
      if (selectorFrom == copyData[i].name) {
        copyData[i].amount = copyData[i].amount - money;
      }
      if (selectorTo == copyData[i].name) {
        copyData[i].amount = copyData[i].amount + parseFloat(money);
      }
    }

    props.setData(copyData);

    props.rerenderTree();
  }
  return (
    <div className={s.HeaderInput}>
      <div className={s.formInput}>
        <div className={s.first}>
          <h4>Из дохода в счет</h4>
          <div className={s.formBlock}>
            <select
              name=""
              id=""
              onClick={rerend}
              onChange={(e) => {
                setSelectorFrom(e.target.value);
              }}
            >
              <option value="asd" selected disabled>
                Выбрать
              </option>
              {incomeOptions}
            </select>
            <select
              name=""
              id=""
              onClick={rerend}
              onChange={(e) => {
                setSelectorTo(e.target.value);
              }}
            >
              <option value="asd" selected disabled>
                Выбрать
              </option>
              {props.data.map((item) =>
                item.title == "Account" ? (
                  <option value={item.name}>{item.name}</option>
                ) : (
                  ""
                )
              )}
            </select>
            <input type="number" onChange={(e) => setMoney(e.target.value)} />
            <button onClick={transfer}>DO IT</button>
          </div>
        </div>
        <div className={s.second}>
          <h4>Из счета в Расходы</h4>
          <div className={s.formBlock}>
            <select
              onClick={rerend}
              onChange={(e) => {
                setSelectorFrom(e.target.value);
              }}
            >
              <option value="asd" selected disabled>
                Выбрать
              </option>
              {props.data.map((item) =>
                item.title == "Account" ? (
                  <option value={item.name}>{item.name}</option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              onClick={rerend}
              onChange={(e) => {
                setSelectorTo(e.target.value);
              }}
            >
              <option value="asd" selected disabled>
                Выбрать
              </option>
              {props.data.map((item) =>
                item.title == "Expenses" ? (
                  <option value={item.name}>{item.name}</option>
                ) : (
                  ""
                )
              )}
            </select>
            <input type="number" onChange={(e) => setMoney(e.target.value)} />
            <button onClick={transfer}>DO IT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderInput;