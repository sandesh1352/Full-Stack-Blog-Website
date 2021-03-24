import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userstatus, setUserstatus] = useState();

  const handleClick = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/UserAPI/User_register/",
      data: { username: username, password: password },
    })
      .then((res) => setUserstatus(res.data.userstatus))
      .catch((e) => console.log(e));
  };

  return (
    <div
      className="Container"
      style={{
        textAlign: "center",
        padding: "70px",
        position: "absolute",
        boxShadow: "3px 8px #D9D9D9",
        border: "1px solid",
        background: "#bb99ff",
        opacity: "0.9",
        marginLeft: "500px",
        marginTop: "20px",
        height: "auto",
        width: "auto",
      }}
    >
      <div>
        <h2>User Registration</h2>
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          style={{ borderRadius: "5px" }}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          style={{ borderRadius: "5px" }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
        <br />

        <Link to="/">
        <button
          className="btn btn-dark"
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
          Register
        </button>
        </Link>
      </div>
    </div>
  );
}
export default Register;
