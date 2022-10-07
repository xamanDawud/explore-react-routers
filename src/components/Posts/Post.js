import React from "react";
import { useLoaderData } from "react-router-dom";
import PostDisplay from "../PostDisplay/PostDisplay";
const Post = () => {
  let posts = useLoaderData();
  return (
    <div>
      <h1>There are available lots of fb posts</h1>
      {posts.map((post) => (
        <PostDisplay key={post.id} post={post}></PostDisplay>
      ))}
    </div>
  );
};

export default Post;
