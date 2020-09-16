import React from "react";
import middle_message from "../../css/top/middle_message.module.css";
import sns_images from "../../images/sns_images.jpeg";
import friend_voices from "../../images/friend_voices.jpeg";
import container from "../../css/basis/container.module.css";

export default function TopMessage(props) {
  return (
    <div className={container.container}>
      <div className={middle_message.flex_container}>
        <div className={middle_message.flex_item}>
          <img
            src={sns_images}
            alt="Logo"
            className={middle_message.sns_images_image}
          />
        </div>
        <div className={middle_message.flex_item}>
          <h3 className={middle_message.heading_message}>
            SNSにリンクを貼るだけで<br></br>簡単自己紹介
          </h3>
          <p className={middle_message.p_message}>
            今までSNSごとにプロフィールを設定する必要がありましたが，
            chrodivaを使えは，リンクを貼るだけで自分のプロフィールを
            閲覧できるようになります。
          </p>
        </div>
      </div>

      <div className={middle_message.flex_container}>
        <div className={middle_message.flex_item}>
          <h3 className={middle_message.heading_message}>
            自分だけでなく，<br></br>友達がプロフィールを形成できる
          </h3>
          <p className={middle_message.p_message}>
            プロフィールは通常，自分自身が設定するものですが，
            chrodivaは友達がプロフィール作成に貢献することができます。
            「この人はこんな風に思われているんだな〜」とか，
            「私って意外にこう思われてたのか！」という，新たな発見をすることが
            できます。
          </p>
        </div>
        <div className={middle_message.flex_item}>
          <img
            src={friend_voices}
            alt="Logo"
            className={middle_message.friend_voices_image}
          />
        </div>
      </div>
    </div>
  );
}
