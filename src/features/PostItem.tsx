import React from "react";
import { Post } from "../models/post";

const PostItem = ({ post, onSelect }: { post: Post, onSelect: () => void }) => {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
        backgroundColor: "lightblue"
      }}
      onClick={onSelect}
    >
      <p><b>Id:</b> {post.id}</p>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Author:</b> {post.author}</p>
    </div>
  );
};

export default PostItem;
