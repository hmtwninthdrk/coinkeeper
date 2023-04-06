import React, { useState } from "react";
import s from "./Income.module.css";
import editpen from "../../img/edit.png";
import education from "../../img/educ.png";
import newblock from "../../img/new.png";

import Modal from "../Modal/Modal";
import Newblock from "../New/Newblock";
const Income = (props) => {
  const [activeModal2, setActiveModal2] = useState(false); //отвечает за открытие модалки добавить
  const [inputTitle, setInputTitle] = useState(""); // название инпута
  const [inputAmount, setinputAmount] = useState(""); // название количество денег
  const [activeModal, setActiveModal] = useState(false); //отвечает за открытие модалки редактировать
  const [value, setValue] = useState(""); // название количество тоже денег
  const [modalTitle, setModalTitle] = useState(""); // название инпута в модалке редактировать
  const [deleteOpt, setDeleteOpt] = useState(true); // в модалке при нажатий на кнопку удалить чтобы поялвялись другие кнопки
  const [options, setOptions] = useState(""); // для валюты
  const [ids, setId] = useState(""); // айдишка
  const [amounts, setAmounts] = useState(0);

  function edits(id) {
    if (
      modalTitle !== "" &&
      value !== "" &&
      modalTitle !== null &&
      value !== null &&
      options !== undefined
    ) {
      for (let i = 0; i < props.data.length; i++) {
        if (props.data[i].id == id) {
          props.data[i].name = modalTitle;
          props.data[i].amount = +value;
        }
      }

      incomeAmountCounter();
      props.rerenderTree();
      setActiveModal(false);
    }
  }

  function incomeAmountCounter() {
    let counter = 0;
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].title == "Income") {
        counter += parseFloat(props.data[i].amount);
      }
    }

    setAmounts(counter);
  }

  function addBlock() {
    if (
      inputTitle !== "" &&
      inputAmount !== "" &&
      inputTitle !== null &&
      inputAmount !== null &&
      options !== undefined
    ) {
      props.data.push({
        title: props.title,
        id: props.data.length + 1,
        name: inputTitle,
        img: "",
        amount: inputAmount,
        opt: options,
      });

      setinputAmount("");
      setInputTitle("");
      setActiveModal2(false);
    }
    incomeAmountCounter();
    props.rerenderTree();
  }

  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.title}>
          <div>Доходы</div>
          <div>март 2023</div>
        </div>

        <div className={s.budget}>
          <div className={s.status}>
            <div>0 T</div>
            <div>Получено</div>
          </div>

          <div className={s.status}>
            <div>{amounts}</div>
            <div>Бюджет доходов</div>
          </div>
        </div>
      </div>

      <div className={s.main}>
        <div className={s.main_inner}>
          {props.data.map((item) =>
            item.title === "Income" ? (
              <div key={item.id} className={s.main_block}>
                <div className={s.block_title}>{item.name}</div>
                <div>{item.inp}</div>
                <div className={s.icon_edit}>
                  <img
                    src={editpen}
                    className={s.edit}
                    onClick={() => {
                      setActiveModal(true);
                      setId(item.id);
                    }}
                  />
                  <img className={s.icon} src={education} />
                </div>

                <div className={s.block_info}>
                  <div className={s.block_amount}>{item.amount}</div>
                  <div className={s.block_edit}>{item.opt}</div>
                </div>
              </div>
            ) : (
              ""
            )
          )}

          <Newblock>
            <div>
              <div className={s.new_block}>
                <img
                  onClick={() => setActiveModal2(true)}
                  src={newblock}
                  className={s.newblock}
                />
              </div>

              <Modal active={activeModal2} setActive={setActiveModal2}>
                <div className={s.modal_header}>
                  <input
                    className={s.input_style}
                    placeholder="Откуда"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    type="text"
                  />

                  <input
                    className={s.input_style}
                    placeholder="Планируете"
                    value={inputAmount}
                    onChange={(e) => setinputAmount(e.target.value)}
                    type="number"
                  />

                  <div className={s.modal_valute}>
                    <div>Валюта</div>
                    <select
                      className={s.select_style}
                      onChange={(e) => setOptions(e.target.value)}
                    >
                      <option className={s.opt_style} value={"RUB"}>
                        RUB
                      </option>
                      <option className={s.opt_style} value={"KZT"}>
                        KZT
                      </option>
                      <option className={s.opt_style} value={"EUR"}>
                        EUR
                      </option>
                    </select>
                  </div>
                </div>
                <button className={s.addbtn} onClick={addBlock}>
                  Добавить
                </button>
              </Modal>
            </div>
          </Newblock>
        </div>
      </div>

      <Modal active={activeModal} setActive={setActiveModal}>
        <div className={s.modal_header}>
          <input
            value={modalTitle}
            onChange={(e) => setModalTitle(e.target.value)}
            type="text"
          />
          <div className={s.modal_title}>Стипендия</div>
          <img className={s.icon} src={education} />
        </div>
        <div className={s.modal_main}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
          />

          {deleteOpt ? (
            <div>
              <button onClick={() => edits(ids)}>Изменить</button>
              <button onClick={(e) => setDeleteOpt(false)}>Удалить</button>
            </div>
          ) : (
            <div>
              <button onClick={(e) => setDeleteOpt(true)}>Отмена</button>
              <button>Сохранить историю</button>
              <button>Удалить все</button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Income;
