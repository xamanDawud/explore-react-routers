import React from "react";
import { Link } from "react-router-dom";

const PostDisplay = ({ post }) => {
  let styles = {
    width: "500px",
    backgroundColor: "pink",
    color: "black",
    border: "2px solid black",
    padding: "10px",
    margin: "auto",
    marginTop: "10px",
  };
  let button = {
    border: "none",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    cursor: "pointer",
  };
  let { id, title, body } = post;
  return (
    <div style={styles}>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>
        <button style={button}>Details</button>
      </Link>
    </div>
  );
};

export default PostDisplay;
