import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
  let singleData = useLoaderData();
  console.log(singleData);
  return (
    <div>
      <h1>This is Single User Page</h1>
    </div>
  );
};

export default SingleUser;
