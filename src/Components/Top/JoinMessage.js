import React from "react";
import { Link } from "react-router-dom";
import join_message from "../../css/top/join_message.module.css";
import top_message from "../../css/top/top_message.module.css";
import container from "../../css/basis/container.module.css";

export default function JoinMessage(props) {
  return (
    <div className={container.container}>
      <h2 className={join_message.join}>さあ、Chrodivaをはじめよう！</h2>

      <div id={top_message.get_started}>
        <button id={top_message.get_started_button}>無料で始める！</button>
        <p></p>
        <span id={top_message.login_message}>
          ユーザ登録がお済みの方は<Link to="/login">こちら</Link>へ
        </span>
      </div>
    </div>
  );
}
