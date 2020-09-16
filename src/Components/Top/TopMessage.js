import React from "react";
import { Link } from "react-router-dom";
import chrodiva_mock from '../../images/chrodiva_mock.jpeg'
import top_message from "../../css/top/top_message.module.css";
import container from "../../css/basis/container.module.css";

export default function TopMessage(props) {
  return (
    <div className={container.container}>
      <div id={top_message.heading}>
        <p id={top_message.main_message}>みんなで作るプロフィール</p>
        <p id={top_message.sub_message}>
          chrodivaで自分のことをよく知ってもらおう！
        </p>
      </div>
      <div id={top_message.get_started}>
        <Link to="/signup" id={top_message.get_started_button}> 無料で始める！ </Link>
        <p></p>
        <span id={top_message.login_message}>
          ユーザ登録がお済みの方は<Link to="/login">こちら</Link>へ
        </span>
      </div>
      <img
        src={chrodiva_mock}
        alt="Logo"
        id={top_message.chrodiva_mock_image}
      />
    </div>
  );
}
