import React from "react"
import { Link } from "react-router-dom";
import _ from "../../css/basis/navbar.module.css";

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}