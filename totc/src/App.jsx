import NavBar from "./components/NavBar";
import Catering from "./pages/Catering";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Menu from "./pages/Menu";
import { Route, Routes } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts?authorID=1 -> ["posts" , { authorId: 1}]]
// /posts/2/comments -> ["posts" , post.id, "comments"]

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: (obj) => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mustationFn: (title) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title })
      );
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>;
  }

  useEffect(() => {
    fetch("http://localhost:8081/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/coffee" element={<Home />} />
      </Routes>
    </div>
  );
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
