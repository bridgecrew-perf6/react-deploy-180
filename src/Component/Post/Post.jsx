import React from "react";

const Post = (props) => {
  const { title, body, id } = props.data;

  return (
    <div className="post">
      <div className="images">
        <img src="https://placeimg.com/200/150/tech" alt="My Images" />
      </div>
      <p className="title">{title}</p>
      <p className="desc">{body}</p>
      <div className="buttonGroup">
        <button className="detail" onClick={() => props.Detail(id)}>
          detail
        </button>
        <button className="update" onClick={() => props.Update(props.data)}>
          update
        </button>
        <button className="remove" onClick={() => props.Delete(id)}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Post;
