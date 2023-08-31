import React from "react";
import Button from "../../shared/ui/Button/Button";
import Input from "../../shared/ui/Input/Input";
import { useState } from "react";
import style from "./style.module.scss";

function PostForm({ creatPost }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
    id: Date.now(),
  });

  function addNewPost(e) {
    e.preventDefault();
    setPost({ ...post });
    console.log(post);

    creatPost(post);
    setPost({ ...post, title: "", body: "" });
  }
  return (
    <>
      <form className={style.form}>
        <Input
          className={style.titleInput}
          type="text"
          placeholder="write title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          style={{ display: "block", margin: "10px" }}
        />
        <Input
          type="text"
          className={style.bodyInput}
          placeholder="write text"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          style={{ display: "block", margin: "10px" }}
        />
        <Button
          value="Add"
          onClick={(e) => addNewPost(e)}
          className={style.addPostBtn}
        />
      </form>
    </>
  );
}

export default PostForm;
