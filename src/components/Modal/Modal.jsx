import React from 'react'
import s from "./Modal.module.css"
const Modal = (props) => {

  return (
    <div className={props.active?"modal active": "modal"} onClick={()=>props.setActive(false)}>
      
        <div className={props.active?"content active": "content"} onClick={e=>e.stopPropagation()}>
          {props.children}
        </div>
    </div>
  )
}

export default Modal