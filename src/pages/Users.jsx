import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const { data } = useLoaderData();
  console.log('users', data);

  return (
    <>
      <div style={{ display: "flex", gap: "1rem",  flexWrap: 'wrap', }}>
        {data.map((user) => (
          <Link
            key={user.id}
            to={user.id.toString()}
            style={{
              textDecoration: "none",
              color: "wheat",
              backgroundColor: "#313866",
              width: "20%",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            }}
            className="link"
          >
            <p>
              Full Name: {user.first_name} {user.last_name}
            </p>
            <p>Email: {user.email}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
