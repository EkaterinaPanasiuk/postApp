import React from "react";
import style from "./filter.module.scss";
import Input from "../../shared/ui/Input/Input";
import Select from "../../shared/ui/Select/Select";

function Filter({ filter, setFilter, optionAr }) {
  return (
    <div className={style.filterWrapper}>
      <Input
        className={style.searchInput}
        placeholder="Search..."
        type="text"
        id="searChInput"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <Select
        className={style.sortSelect}
        value={filter.sort}
        onChange={(value) => setFilter({ ...filter, sort: value })}
        name="select"
        id="sortingSelect"
        optionAr={optionAr}
      />
    </div>
  );
}

export default Filter;
