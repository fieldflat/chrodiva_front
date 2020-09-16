import React from "react";
import middle_message from "../../css/top/middle_message.module.css";
import container from "../../css/basis/container.module.css";

export default function TopMessage(props) {
  return (
    <div className={container.container}>
      <div className={middle_message.flex_container}>
        <div className={middle_message.flex_item}>
          {/* <Image filename="sns_images.jpeg" alt="sns_images" /> */}
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
          {/* <Image filename="comments.jpeg" alt="comments" /> */}
        </div>
      </div>
    </div>
  );
}
