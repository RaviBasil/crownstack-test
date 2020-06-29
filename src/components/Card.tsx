import * as React from "react";
import "../styles/component/Card.css";
import { Link } from "react-router-dom";

export default function Card(props: any) {
  return (
    <Link to={props.link}>
      <div className="card">
        <img src={props.imageSrc} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
        </div>
      </div>
    </Link>
  );
}
