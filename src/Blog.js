import React, { useEffect, useState } from "react";
import "./Blog.css";

import axios from "axios";

function Blog() {
  const [Post, SetPost] = useState([]);
  useEffect(
    () =>
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        console.log(res.data);

        SetPost(res.data);
      }),
    []
  );
  return (
    <div className="container">
      <h2>Blogs</h2>
      <ul>
        {Post.map((dd) => (
          <li>{dd.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
