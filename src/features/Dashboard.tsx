import React, { useState } from "react";
import Posts from "./Posts";

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" }
  ]);

  const [newTitle, setNewTitle] = useState("");

  const updateTitle = () => {
    setPosts((prevPosts) =>
      prevPosts.map((post, index) =>
        index === 0 ? { ...post, title: newTitle } : post
      )
    );
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Posts posts={posts} />
      <input
        type="text"
        placeholder="Enter new title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={updateTitle}>Change Name</button>
    </div>
  );
};

export default Dashboard;
