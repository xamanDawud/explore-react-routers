import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePostDisplay from "../SinglePostDisplay/SinglePostDisplay";

const SinglePost = () => {
  let singlePost = useLoaderData();
  console.log(singlePost);
  return (
    <div>
      <SinglePostDisplay
        key={singlePost.id}
        post={singlePost}
      ></SinglePostDisplay>
    </div>
  );
};

export default SinglePost;
