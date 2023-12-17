import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function UserDetails() {
  // const user = useLoaderData().data   user.avatar
 


  const { data } = useLoaderData();

  return (
    <>
    <Link to='/users' style={{color: '#c23373', fontSize:'1.2rem'}} >Back to users</Link>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img src={data.avatar} alt={data.first_name} height={400} />
        <p>
          Full Name: {data.first_name} {data.last_name}{" "}
        </p>
        <p>Email: {data.email} </p>
      </div>
    </>
  );
}
