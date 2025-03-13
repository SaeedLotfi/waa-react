import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Post) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};