import style from "./App.module.scss";
import Loader from "./shared/ui/Loader/Loader";
import { useState, useEffect, lazy, Suspense } from "react";
import PostForm from "./feature/PostForm/PostForm";
import Filter from "./feature/Filter/Filter";
import Modal from "./widgets/Modal/Modal";
import Button from "./shared/ui/Button/Button";
import useSorted from "./shared/castomHook/useSorted";
import Pagination from "./feature/Pagination/Pagination";
import { Link } from "react-router-dom";
import RourerComponent from "./pages/RourerComponent/RourerComponent";

function App() {
  /* ------------- // context//--------------------- */

  const PostList = lazy(() => import("./widgets/PostList/PostList"));
  /* ------------- // modal window controller */
  const [visible, setVisible] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const openModal = () => setVisible(!visible);
  /* ------------- //data from jsonplaceholder */
  useEffect(() => {
    console.log(page);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        return setData(data);
      });
  }, [page]);
  const [filter, setFilter] = useState({
    sort: "",
    search: "",
  });
  const [data, setData] = useState([]);
  const optionAr = [
    {
      value: "",
      option: "Cортировать по:",
    },
    { value: "title", option: "по названию" },
    { value: "body", option: "по тексту" },
  ];
  const creatPost = (post) => {
    setData([...data, post]);
    setVisible(!visible);
  };
  const deletePost = (id) => {
    setData(data.filter((i) => i.id !== id));
  };
  const getNewPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const serchAndSortedData = useSorted(data, filter.sort, filter.search);

  return (
    <>
      <div className={style.appWrapper}>
        <header className={style.header}>
          <div className={style.headerFilter}>
            <Filter filter={filter} setFilter={setFilter} optionAr={optionAr} />
            <Button
              value="Add post"
              onClick={openModal}
              className={style.modalOpenBtn}
            />
          </div>
        </header>
      </div>

      <div className={style.appWrapper}>
        <Modal visible={visible} setVisible={setVisible}>
          <PostForm creatPost={creatPost} />
        </Modal>

        <hr />
        <Suspense fallback={<Loader />}>
          <PostList data={serchAndSortedData} deletePost={deletePost} />
        </Suspense>
        <Pagination pagesCount={10} getNewPage={getNewPage} pageNumber={page} />
      </div>
    </>
  );
}

export default App;
