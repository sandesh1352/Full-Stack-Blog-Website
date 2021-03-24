import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import Crud from "./Crud";
import axios from "axios";

export default function UsersBlog(props) {
  const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [views, setViews] = useState(false);
  const [post, setPost] = useState(false);

  const [updateTitle, setUpdateTitle] = useState("");
  const [updateBody, setUpdateBody] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/BlogAPI/BlogView/",
    })
      .then((res) => res.data)
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/BlogAPI/BlogPostAuthor/${localStorage.userid}`,
      headers: {
        Authorization: "Bearer " + localStorage.Token,
      },
    })
      .then((res) => res.data)
      .then((data) => setMyBlogs(data));
  }, []);

  const handleCreateBlog = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/BlogAPI/BlogPost/",
      headers: {
        Authorization: "Bearer " + localStorage.Token,
      },
      data: {
        title: updateTitle,
        body: updateBody,
        author: localStorage.userid,
      },
    }).then((res) => console.log(res.data));
  };
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          SandyMan Blogs!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <button
              className="btn btn-dark btn-md"
              onClick={() => {
                setViews(!views);
              }}
            >
              Home
            </button>
            <button
              className="btn btn-dark btn-md"
              onClick={() => {
                setViews(!views);
              }}
            >
              Crud
            </button>
            <Link to="/">
              <button
                className="btn btn-dark btn-md"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            </Link>

            <button
              type="submit"
              className="btn btn-dark btn-md"
              onClick={() => {
                setPost(!post);
              }}
            >
              Add Post
            </button>
          </div>
        </div>
      </nav>

      {post ? (
        <div
          style={{
            textAlign: "center",
            width: "auto",
            padding: "10px",
            position: "relative",
            marginLeft: "450px",
            marginTop: "30px",
            border: "1px solid",
            width: " 500px",
          }}
        >
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              title
            </label>
            <input
              type="email"
              class="form-control"
              value={updateTitle}
              onChange={(e) => {
                setUpdateTitle(e.target.value);
              }}
              id="exampleFormControlInput1"
              placeholder="Heading of your blog"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Content
            </label>
            <textarea
              class="form-control"
              value={updateBody}
              onChange={(e) => {
                setUpdateBody(e.target.value);
              }}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button
              type="submit"
              class="btn btn-dark "
              style={{
                margin: "auto",
                margin: "10px",
                marginLeft: "10px",
                width: "100px",
              }}
              onClick={() => {
                handleCreateBlog();
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {views
        ? myBlogs.map((item) => {
            return (
              <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                <Crud title={item.title} body={item.body} id={item.id} />
              </div>
            );
          })
        : blogs.map((item) => {
            return (
              <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                <Blog title={item.title} body={item.body} />
              </div>
            );
          })}
    </div>
  );
}
