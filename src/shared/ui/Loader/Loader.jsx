import React from "react";
import style from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.loaderContent}></div>
      <h4>Loading...</h4>
    </div>
  );
}
