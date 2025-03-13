import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "../features/Posts";
import PostDetails from "../features/PostDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts posts={[]}/>} />
        <Route path="/post/:id" element={<PostDetails post={{ title: '', author: '' }} />} />
      </Routes>
    </Router>
  );
}

export default App;
