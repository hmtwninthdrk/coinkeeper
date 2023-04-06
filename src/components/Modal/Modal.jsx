import React from 'react'
import s from "./Modal.module.css"
const Modal = (props) => {
  let pr = props.defaultIcons;
  return (
    <div className={props.active?"modal active": "modal"} onClick={()=>props.setActive(false)}>
      
        <div className={props.active?"content active": "content"} onClick={e=>e.stopPropagation()}>
          {props.children}
        </div>
        <div className={s.modal_right}>
          <img src="" alt="" />
                  <div >

                    {pr.map((item)=>
                    <div>{item}</div>
                    )}

                  </div>
                </div>
    </div>
  )
}

export default Modal