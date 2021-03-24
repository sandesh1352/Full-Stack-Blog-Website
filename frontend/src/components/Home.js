import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div style={{ margin: "10px", paddingTop: "100px" }}>
     
      <div class="jumbotron jumbotron-fluid" style={{background:"#ff6666",textAlign:"center",  fontFamily: 'Times New Roman, Times, serif'}}>
        <div class="container">
          <h1 class="display-4">SandyMan Blogs!</h1>
          <h5 class="lead">
           " Its not what you upload, it's the strategy with which you upload".
          </h5>
        </div>
      </div>
      <div className="container" style={{ paddingLeft: "250px" }}>
        <Link to="/logIn">
          <button
            className="btn btn-outline-primary btn-lg mx-3"
            style={{ paddingRight: "200px", justifyContent: "center" }}
          >
            Login
          </button>
        </Link>

        <Link to="/Register">
          <button
            className="btn btn-outline-danger btn-lg mx-3"
            style={{ paddingRight: "200px", justifyContent: "center" }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
