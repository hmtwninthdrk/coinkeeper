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
    for (let i = 0; i < props.data.length; i++) {
      if (selectorFrom == props.data[i].name) {
        props.data[i].count = props.data[i].count + parseFloat(money);
      }
      if (selectorTo == props.data[i].name) {
        props.data[i].count = props.data[i].count + parseFloat(money);
      }
    }
    console.log(props.data);

    props.history.push({
      id: props.history.length + 1,
      from_title: selectorFrom,
      to_title: selectorTo,
      money: money,
    });

    props.rerenderTree();
  }

  return (
    <div className={s.HeaderInput}>
      <div className={s.formInput}>
        <div className={s.first}>
          <h4>Из дохода в счет</h4>
          <div className={s.formBlock}>
          <div className={s.formtext} >Из</div>

            <select className={s.inp_select}
              name=""
              id=""
              onClick={rerend}
              onChange={(e) => {
                setSelectorFrom(e.target.value);
              }}
            >
              <option className={s.inp_opt} value="asd" selected disabled>
                Выбрать
              </option>
              {incomeOptions}
            </select>
            <div className={s.formtext} >В</div>
            <select className={s.inp_select}
              name=""
              id=""
              onClick={rerend}
              onChange={(e) => {
                setSelectorTo(e.target.value);
              }}
            >
              <option className={s.inp_opt} value="asd" selected disabled>
                Выбрать
              </option>
              {props.data.map((item) =>
                item.title == "Account" ? (
                  <option className={s.inp_opt} value={item.name}>{item.name}</option>
                ) : (
                  ""
                )
              )}
            </select>
            <input placeholder="Сумма" type="number" onChange={(e) => setMoney(e.target.value)} />
            <button className={s.btn } onClick={transfer}>DO IT</button>
          </div>
        </div>
        <div className={s.second}>
          <h4>Из счета в Расходы</h4>
          <div className={s.formBlock}>
          <div className={s.formtext} >Из</div>
            <select className={s.inp_select}
              onClick={rerend}
              onChange={(e) => {
                setSelectorFrom(e.target.value);
              }}
            >
              <option className={s.inp_opt} value="asd" selected disabled>
                Выбрать
              </option>
              {props.data.map((item) =>
                item.title == "Account" ? (
                  <option className={s.inp_opt} value={item.name}>{item.name}</option>
                ) : (
                  ""
                )
              )}
            </select>
            <div className={s.formtext} >В</div>
            <select className={s.inp_select}
              onClick={rerend}
              onChange={(e) => {
                setSelectorTo(e.target.value);
              }}
            >
              <option  className={s.inp_opt} value="asd" selected disabled>
                Выбрать
              </option>
              {props.data.map((item) =>
                item.title == "Expenses" ? (
                  <option className={s.inp_opt} value={item.name}>{item.name}</option>
                ) : (
                  ""
                )
              )}
            </select>
            <input placeholder="Сумма" type="number" onChange={(e) => setMoney(e.target.value)} />
            <button className={s.btn }  onClick={transfer}>DO IT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderInput;
