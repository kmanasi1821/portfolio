import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
