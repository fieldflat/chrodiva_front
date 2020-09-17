import React from "react";
import container from "../../css/basis/container.module.css";
import help from "../../css/help/help.module.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

export default function HelpContainer(props) {
  return (
    <div className={container.container}>
      <h3 className={help.inform}>
        お問い合わせについては，以下の公式ツイッターアカウントにご連絡ください！
      </h3>
      <div id={help.twitter_embed}>
        <TwitterTweetEmbed
          tweetId={"1218160447586631683"}
          class={help.twitter_embed_item}
        />
        <a
          href="https://twitter.com/field_flat?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
        >
          Follow @field_flat
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
}
