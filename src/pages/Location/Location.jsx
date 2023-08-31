import React from "react";
import { useEffect, useState, lazy, Suspense } from "react";
import PostList from "../../widgets/PostList/PostList";
import style from "./location.module.scss";

function Location() {
  const url = "https://rickandmortyapi.com/api/location";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, []);
  console.log(data);
  return (
    <>
      <h2>Location</h2>
      <div className={style.wrapper}>
        {<PostList data={data} title="Location" />}
      </div>
    </>
  );
}

export default Location;
