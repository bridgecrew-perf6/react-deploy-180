import React, { Component, Fragment } from "react";
import Post from "../../../Component/Post/Post";
import { withRouter } from "react-router";
import API from "../../../Services/Services";

class BlogPost extends Component {
  state = {
    post: [],
    comments: [],
    formBlogPost: {
      userId: 1,
      id: "",
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  getDataAPI = () => {
    API.Blogpost().then((res) => {
      this.setState({ post: res });
    });

    API.Comments().then((res) => {
      this.setState({ comments: res });
    });
  };

  deleteToAPI = (id) => {
    API.deleteBlog(id).then(() => this.getDataAPI());
  };

  postDataToAPI = () => {
    API.PostBlog(this.state.formBlogPost).then(() => {
      this.getDataAPI();
      this.setState({
        formBlogPost: {
          userId: 1,
          id: "",
          title: "",
          body: "",
        },
      });
    });
  };

  putDataToAPI = () => {
    const { formBlogPost } = this.state;

    API.updateBlog(formBlogPost, formBlogPost.id).then(() => {
      this.getDataAPI();
      this.setState({
        formBlogPost: {
          userId: 1,
          id: "",
          title: "",
          body: "",
        },
        isUpdate: false,
      });
    });
  };

  handleChange = (e) => {
    const formBlogPostNew = { ...this.state.formBlogPost };
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = new Date().getTime();
    }

    formBlogPostNew[e.target.id] = e.target.value;

    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleDetail = (id) => {
    const { history } = this.props;
    history.push(`/Blogpost/Detail/${id}`);
  };

  componentDidMount() {
    this.getDataAPI();
  }

  render() {
    const { formBlogPost, post, isUpdate, comments } = this.state;
    const { handleChange, handleSubmit, deleteToAPI, handleDetail, handleUpdate} = this;

    return (
      <Fragment>
        <p className="heading-p">Halaman BlogPost</p>
        <hr />
        <div className="container-blogpost">
          <div className="form-add">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              onChange={handleChange}
              autoFocus
              value={formBlogPost.title}
            />
            <label htmlFor="body">Body</label>
            <textarea
              value={formBlogPost.body}
              id="body"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>
              {isUpdate ? "Update" : "Tambah"}
            </button>
          </div>

          {comments.map((comment) => (
            <p>
              {comment.name} : {comment.email}
            </p>
          ))}

          {post.map((post) => (
            <Post
              key={post.id}
              data={post}
              Delete={deleteToAPI}
              Update={handleUpdate}
              Detail={handleDetail}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(BlogPost);
