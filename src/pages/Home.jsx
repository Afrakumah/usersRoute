import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const posts = useLoaderData();
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <div
            style={{
              color: "wheat",
              backgroundColor: "#313866",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <p>Title: {post.title} </p>
            <p>Body: {post.body} </p>
          </div>
        </div>
      ))}
    </>
  );
}
