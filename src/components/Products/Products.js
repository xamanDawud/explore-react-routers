import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Products = () => {
  let users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>ALl Users Details</h1>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Products;
