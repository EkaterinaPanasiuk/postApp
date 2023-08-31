import React from "react";
import Button from "../../shared/ui/Button/Button";
import style from "./pagination.module.scss";

function Pagination({ pagesCount, getNewPage, pageNumber }) {
  const handlePagination = (pageNumber) => {
    getNewPage(pageNumber);
  };

  const btnArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    let btnClass;
    i === pageNumber
      ? (btnClass = [style.btn, style.active].join(" "))
      : (btnClass = style.btn);
    btnArr.push(
      <Button
        className={btnClass}
        value={i}
        onClick={() => handlePagination(i)}
        key={i}
      />
    );
  }
  return <div className={style.paginationWrapper}>{btnArr}</div>;
}

export default Pagination;
