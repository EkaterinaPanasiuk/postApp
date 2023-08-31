import { useMemo } from "react";
import React from "react";

function useSorted(data, sort, search) {
  // мемоизация массива данных в зависимости от сортировки и добавления/удаления элементов из массива
  const sortedData = useMemo(() => {
    if (sort) {
      return [...data].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else return data;
  }, [sort, data]);
  const serchAndSortedData = useMemo(() => {
    return sortedData.filter((i) =>
      i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, sortedData]);
  return serchAndSortedData;
}

export default useSorted;
