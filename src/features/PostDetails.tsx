import React from "react";

const PostDetails = ({ post }: { post: { title: string, author: string }}) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
      <h3>{post.title}</h3>
      <p><b>{post.author}</b></p>
      <p>This is the content in the post…</p>
      <button style={{ color: "red", marginRight: "10px" }}>edit</button>
      <button style={{ color: "red" }}>delete</button>
    </div>
  );
};

export default PostDetails;
