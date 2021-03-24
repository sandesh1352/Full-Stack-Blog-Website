import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState({});
  const [loggedin, setLoggedin] = useState();
  const [userid, setUserid] = useState();
  const [userstatus, setUserstatus] = useState({});

  localStorage.setItem("Token", token.access);
  localStorage.setItem("loggedin", userstatus.loggedIn);
  localStorage.setItem("userid", userstatus.id);

  const handleClick = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/UserAPI/token/",
      data: { username: username, password: password },
    })
      .then((res) => setToken(res.data))
      .catch((e) => console.log(e));

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/UserAPI/User_login/",
      data: { username: username, password: password },
    })
      .then((res) => setUserstatus(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        padding: "70px",
        position: "absolute",
        boxShadow: "3px 8px #D9D9D9",
        border: "1px solid",
        
        background:'#99ff99',
        opacity:'0.9',
        marginLeft: "550px",
        marginTop: "20px",
        height: "auto",
        width: "auto",
      }}
    >
      <div>
        <h2 class="form-signin-heading">Please login</h2>
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          style={{ borderRadius: "5px" }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          style={{ borderRadius: "5px" }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      {userstatus.msg ? (
        <Link to="/UsersBlog">
          <button
            class="btn btn-dark "
            type="submit"
            style={{
              margin: "auto",
              margin: "10px",
              marginLeft: "10px",
              width: "125px",
            }}
            onClick={() => {
              handleClick();
            }}
          >
            Login
          </button>
        </Link>
      ) : (
        <button
          class="btn btn-dark"
          style={{
            margin: "auto",
            margin: "10px",
            marginLeft: "10px",
            width: "125px",
          }}
          type="submit"
          onClick={() => {
            handleClick();
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
export default Login;
