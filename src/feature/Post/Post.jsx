import React from "react";
import Button from "../../shared/ui/Button/Button";
import style from "./post.module.scss";

function Post({ title, id, body, deletePost }) {
  const deleteF = () => {
    deletePost(id);
  };
  return (
    <div className={style.postWrapper} id={id}>
      <div className="text">
        <h4 className={style.title}>
          {title}------{id}
        </h4>
        <p>{body}</p>
      </div>
      <Button
        value="Delete"
        onClick={deleteF}
        className={style.deletePostBtn}
      />
    </div>
  );
}

export default Post;
