import React from "react";

export default function Blog(props) {
  return (
    <div style={{height: "auto",
    width: "auto",
    padding: "20px",
    marginRight:"200px",
    color:"#000000",
    border:"1px solid "
    
  }}>
      <div class="card">
        <div class="card-header">
          <h2>{props.title}</h2>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{props.body}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
