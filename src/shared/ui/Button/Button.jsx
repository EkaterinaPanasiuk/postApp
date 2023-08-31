import React, { useContext } from "react";

import style from "./button.module.scss";

function Button({ value, ...props }) {
  // const btnClass = [props.className, style.theme].join(" ");
  return <button {...props}>{value}</button>;
}

export default Button;
