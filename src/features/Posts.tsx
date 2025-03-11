import React, { useState } from "react";
import PostItem from "./PostItem";
import PostDetails from "./PostDetails";
import { Post } from "../models/post";

const Posts = ({ posts }: { posts: Post[] }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelect={() => setSelectedPost(post)} />
      ))}
      {selectedPost && <PostDetails post={selectedPost} />}
    </div>
  );
};

export default Posts;
