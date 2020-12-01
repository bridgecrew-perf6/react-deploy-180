import React, { Component } from "react";

class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   fetch(`http://localhost:3004/posts/${id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         post: {
  //           title: json.title,
  //           body: json.body,
  //         },
  //       });
  //     });
  // }

  render() {
    const { title, body } = this.state;

    return (
      <div className="detailPost">
        <p>{title}</p>
        <p>{body}</p>
      </div>
    );
  }
}

export default DetailPost;
