import React , { useState }  from 'react'
import s from "./Expenses.module.css"
import editpen from "../../img/edit.png" 
import education from "../../img/educ.png"
import { v4 as uuidv4 } from 'uuid'
import newblock from "../../img/new.png"
import Modal from '../Modal/Modal'
import Newblock from '../New/Newblock'
const Expenses = (props) => {

    const [activeModal2,setActiveModal2] = useState(false)
    const [modalTitle2,setModalTitle2] = useState("")
    const [modalAmount,setModalAmount] = useState("")
      const [activeModal,setActiveModal] = useState(false)
      const [value,setValue] = useState("")
      const [modalTitle,setModalTitle] = useState("")
      const [change,setchange] = useState(false);
      const [deleteOpt,setDeleteOpt] = useState(true);
      const [options,setOptions] = useState("");
      const [addNewBlock,setAddNewBlock] = useState(false)
      
      function edits(){
        setchange(true)
        setActiveModal(false)
      }
  
      function addBlock(){
        if (modalTitle2 !== "" && modalAmount !== "" && modalTitle2 !== null && modalAmount !== null && options !== undefined ) {
          props.setData([
            ...props.data,
           
            {
              title:props.title,
              id: uuidv4(),
              name: modalTitle2,
              img: "",
              amount : modalAmount,
              opt: options, 
        }])
    
        setModalAmount("")
        setModalTitle2("")
      } 
    
      setActiveModal(false)
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
      <div>{ "0 "}</div>
      <div>Бюджет доходов</div>
      </div>

      <div className={s.status}>
      <div>0 T</div>
      <div>В планах</div>
      </div>

      <div className={s.status}>
      <div>{ "0 "}</div>
      <div>прогноз расходов</div>
      </div>

      </div>
    </div>


    <div className={s.main}>
      <div className={s.main_inner}>
    
      {
       
       props.data.map((item)=>
       
       item.title ==="Expenses"? 
       (<div key={item.id} className={s.main_block}>
       <div className={s.block_title}>{ item.name}</div>
        <div>{item.inp}</div>
       <div className={s.icon_edit}>
         <img src={editpen} className={s.edit} onClick ={()=>setActiveModal(true)} />
         <img className={s.icon} src={education}/>
        </div>
          
        <div className={s.block_info}>
       <div className={s.block_amount}>0</div>
       <div className={s.block_edit}>{change? value + " " + item.opt: item.amount + item.opt}</div>
     </div>
    </div>):("")

       )
      }

      <Newblock>
      <div>
     <div className={s.new_block}>
    <img onClick ={()=>setActiveModal2(true)} src={newblock} className={s.newblock}/>
    </div>

    <Modal active = {activeModal2} setActive = {setActiveModal2}>
    <div className={s.modal_header}>
    
    <input placeholder='Откуда' value={modalTitle2} onChange = {e=>setModalTitle2(e.target.value)} type="text"/>
    
    <input placeholder='Планируете' value={modalAmount} onChange = {e=>setModalAmount(e.target.value)} type="text"/>
    
      
    <div className={s.modal_valute}>
      <div>Валюта</div>
      <select onChange={(e) => setOptions(e.target.value)}>
        <option value={"RUB"}>RUB</option>
        <option value={"KZT"}>KZT</option>
        <option value={"EUR"}>EUR</option>
      </select>
    </div>
    <button onClick={addBlock }>Добавить</button>
    </div>

    </Modal>
   </div>

    


      </Newblock>
      
      </div>
    </div>
    



  <Modal active = {activeModal} setActive = {setActiveModal}>
    <div className={s.modal_header}>
      <input value={modalTitle} onChange = {e=>setModalTitle(e.target.value)} type="text"/>
      <div className={s.modal_title}>Стипендия</div>
      <img className={s.icon} src={education}/>
    </div>
    <div className={s.modal_main}>
      <input value={value} onChange={e=>setValue(e.target.value)} type="number" />
      
      {deleteOpt? 
      <div>
        <button onClick={edits}>Изменить</button>
      <button onClick={e=> setDeleteOpt(false)}>Удалить</button>
      </div>: 
      <div>
        <button onClick={e=> setDeleteOpt(true)} >Отмена</button>
      <button>Сохранить историю</button>
      <button>Удалить все</button>
      </div>
      }
    </div>
  </Modal>
  </div>

  )
}

export default Expenses