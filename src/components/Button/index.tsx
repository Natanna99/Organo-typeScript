import React from "react";
import style from "./Button.module.css";

interface ButtonInteface {
  children: React.ReactElement | string;
  clickSubmit?: () => void;
}

export function Button({ children, ...props }: ButtonInteface) {
  return (
    <div className={style.containerButton}>
      <button onClick={props?.clickSubmit} className={style.buttonForm}>
        {children}
      </button>
    </div>
  );
}
