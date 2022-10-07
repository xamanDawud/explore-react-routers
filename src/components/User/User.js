import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  let { id, name, email, phone } = user;
  let styles = {
    backgroundColor: "gray",
    border: "1px solid yellow",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={styles}>
      <h1>Name :{name}</h1>
      <p>Email :{email}</p>
      <p>Phone:{phone}</p>
      <p>
        Id:<Link to={`/friendDetails/${id}`}>Number</Link>
      </p>
    </div>
  );
};

export default User;
