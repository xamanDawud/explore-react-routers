import React from "react";

const SinglePostDisplay = ({ post }) => {
  let styles = {
    width: "500px",
    backgroundColor: "pink",
    color: "black",
    border: "2px solid black",
    padding: "10px",
    margin: "auto",
    marginTop: "10px",
  };
  let { title, body, id } = post;
  return (
    <div style={styles}>
      <h1>{title}</h1>
      <p>Id : {id}</p>
      <p>{body}</p>
    </div>
  );
};

export default SinglePostDisplay;
