import { useState } from "react";
import s from "./Header.module.css";
function Header(props) {
  return (
    <div className={s.Header}>
      <div className={s.block}>
        LOGO
        <button>EXIT</button>
      </div>
    </div>
  );
}

export default Header;
