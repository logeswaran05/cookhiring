import React from "react";
export default function Card(props) {
  return (
    <div className="card shadow p-3 m-3 bg-white rounded text-dark">
     
      {props.children}
    </div>
  );
}
