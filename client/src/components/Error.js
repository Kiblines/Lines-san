import React from "react";
import Title from "../components/TitleHeader";
import Error404 from "../error404.jpg";

export default function Error(props) {
  return (
    <>
      <Title>Error{props.type}</Title>;<div>{props.children}</div>
    </>
  );
}
