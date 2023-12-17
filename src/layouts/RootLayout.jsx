import { Outlet } from "react-router-dom";
import Header from "./../components/header";

import React from "react";

export default function () {
  return (
    <div>
      <Header />

      <main style={{padding: '1rem 2rem'}}>
        <Outlet />
      </main>
    </div>
  );
}
