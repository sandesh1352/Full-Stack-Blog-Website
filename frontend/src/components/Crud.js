import React, { useState } from "react";
import axios from "axios";

export default function Crud(props) {
  const [changeTitle, setChangeTitle] = useState(props.title);
  const [changeBody, setChangeBody] = useState(props.body);

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: "//127.0.0.1:8000/BlogAPI/deleteBlogPost/",
      headers: {
        Authorization: "Bearer " + localStorage.Token,
      },
      data: {
        id: String(props.id),
        title: props.title,
        body: props.body,
      },
    }).then((res) => res.data);
  };

  const handleUpdate = () => {
    axios({
      method: "PUT",
      url: "//127.0.0.1:8000/BlogAPI/BlogPostCrud/",
      headers: {
        Authorization: "Bearer " + localStorage.Token,
      },
      data: {
        id:String(props.id),
        title: changeTitle,
        body: changeBody,
        author: localStorage.userid,
      },
    }).then((res) => console.log(res.data));
  };

  return (
    <div style={{padding:'10px',}}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>

      <label>Title</label>
      <input
        type="text"
        value={changeTitle}
        onChange={(e) => {
          setChangeTitle(e.target.value);
        }}
      /><br/>

      <label>Body</label><br/>
      <textarea
        rows="10"
        cols="50"
        value={changeBody}
        onChange={(e) => {
          setChangeBody(e.target.value);
        }}
      ></textarea>
      <button  class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => {handleDelete()}}>Delete</button>
      <button  class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => {handleUpdate()}}>Update</button>
    </div>
  );
}
