import DELETE from "./Delete";
import GET from "./Get";
import POST from "./Post";
import PUT from "./Put";

//! PUT
const updateBlog = (data, id) => PUT(`posts/${id}`, false, data);

//! POST
const PostBlog = (data) => POST("posts", false, data);

//! DELETE
const deleteBlog = (id) => DELETE(`posts/${id}`, false);

//! GET
const Blogpost = () => GET("posts?_sort=id&_order=desc", false);
const Comments = () => GET("comments", true);

const API = {
  Blogpost,
  Comments,
  PostBlog,
  deleteBlog,
  updateBlog,
};

export default API;
