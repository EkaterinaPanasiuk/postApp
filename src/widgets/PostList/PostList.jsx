import React from "react";
import Post from "../../feature/Post/Post";

function PostList({ data, title = "List", deletePost }) {
  const dataAr = data.map((i) => (
    <Post
      title={i.title}
      body={i.body}
      id={i.id}
      key={i.id}
      deletePost={deletePost}
    />
  ));
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      {data.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>List is empty</h2>
      ) : (
        <ul>{dataAr}</ul>
      )}
    </div>
  );
}

export default PostList;
