import React from "react";
import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <>
      <h1>404</h1>
      <h4>We Couldn&#39;t find the page</h4>
      <p>
        This page was not found. You may have mistyped the address or the page
        may be moved.
      </p>
      <NavLink to="/">Take me to the home page</NavLink>
    </>
  );
}

export default Page404;
