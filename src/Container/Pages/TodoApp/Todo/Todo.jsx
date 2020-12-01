import React from "react";

export const Todo = (props) => {
  let i = 1;
  return (
    <ul>
      {props.dataItems.map((item) => (
        <li key={item.id}>
          {i++}. {item.text}
        </li>
      ))}
    </ul>
  );
};
