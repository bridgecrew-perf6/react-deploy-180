import React from "react";

export const Youtube = (props) => {
  return (
    <div className="youtube">
      <div className="images">
        <img
          src="https://i.ytimg.com/vi/2CQhh_6xU3s/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD8hujJKKTdthKBFwoiKJhlUu0uHw"
          alt="My Images"
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

Youtube.defaultProps = {
  time: "00.00",
  title: "My title",
  desc: "My desc",
};
