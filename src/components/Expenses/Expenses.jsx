import React, { useState } from "react";
import s from "./Expenses.module.css";
import editpen from "../../img/edit.png";
import education from "../../img/educ.png";
import { v4 as uuidv4 } from "uuid";
import newblock from "../../img/new.png";
import Modal from "../Modal/Modal";
import Newblock from "../New/Newblock";
const Expenses = (props) => {
  const [activeModal2, setActiveModal2] = useState(false);
  const [modalTitle2, setModalTitle2] = useState("");
  const [inputAmount, setinputAmount] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  const [value, setValue] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [deleteOpt, setDeleteOpt] = useState(true);
  const [ids, setId] = useState("");
  const [options, setOptions] = useState("");
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
        props.data[i].amount = value;
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
      if (props.data[i].title == "Expenses") {
        counter += parseFloat(props.data[i].amount);
      }
    }

    setAmounts(counter);
  }

  function addBlock() {
    if (
      modalTitle2 !== "" &&
      inputAmount !== "" &&
      modalTitle2 !== null &&
      inputAmount !== null &&
      options !== undefined
    ) {
      props.data.push({
        title: props.title,
        id: props.data.length + 1,
        name: modalTitle2,
        img: "",
        amount: inputAmount,
        opt: options,
    });

      setinputAmount("");
      setModalTitle2("");
      setActiveModal2(false);
    }
    incomeAmountCounter();
    props.rerenderTree();
    
  }
  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.title}>
          <div>Расходы</div>
          <div>март 2023</div>
        </div>

        <div className={s.budget}>
          <div className={s.status}>
            <div>0 T</div>
            <div>Потрачено</div>
          </div>

          <div className={s.status}>
            <div>{amounts}</div>
            <div>Бюджет доходов</div>
          </div>

          <div className={s.status}>
            <div>0 T</div>
            <div>В планах</div>
          </div>

          <div className={s.status}>
            <div>{"0 "}</div>
            <div>прогноз расходов</div>
          </div>
        </div>
      </div>

      <div className={s.main}>
        <div className={s.main_inner}>
          {props.data.map((item) =>
            item.title === "Expenses" ? (
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
                    value={modalTitle2}
                    onChange={(e) => setModalTitle2(e.target.value)}
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

export default Expenses;
