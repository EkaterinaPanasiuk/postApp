import React from "react";

function Select({ optionAr, sortData, onChange, ...props }) {
  const optionArr = optionAr.map((i) => (
    <option value={i.value} key={i.value} disabled={i.disabled}>
      {i.option}
    </option>
  ));
  return (
    <>
      <select
        className={props.className}
        value={props.value}
        name={props.name}
        id={props.id}
        onChange={(e) => onChange(e.target.value)}
      >
        {optionArr}
      </select>
    </>
  );
}

export default Select;
