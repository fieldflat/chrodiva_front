import React from "react"
import styles from "../css/navbar.module.css"

export default function Navbar(props) {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}