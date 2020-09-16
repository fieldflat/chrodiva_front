import React from "react";
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
        <button id={top_message.get_started_button}>無料で始める！</button>
        <p></p>
        <span id={top_message.login_message}>
          ユーザ登録がお済みの方は<a href="#">こちら</a>へ
        </span>
      </div>

      {/* <Image filename="chrodiva_mock.png" alt="chrodiva_mock" /> */}
    </div>
  );
}
