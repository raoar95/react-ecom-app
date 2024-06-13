import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>Sorry Page Not Found</h1>
      <p>Return <Link to="/">Home</Link></p>
    </>
  );
};

export default PageNotFound;
