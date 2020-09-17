import React from "react";
import container from "../../css/basis/container.module.css";
import creator from "../../css/about/creator.module.css";
import hirata_picture from "../../images/hirata_picture.jpg";

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

export default function CreatorContainer(props) {
  return (
    <div className={container.container}>
      <div className={creator.whole}>
        <div className={creator.image_phase}>
          <img
            src={hirata_picture}
            alt="About HIRATA Tomonori"
            className={creator.image}
          />
        </div>

        <div className={creator.name}>
          <p>HIRATA Tomonori (@field_flat)</p>
        </div>
      </div>
    </div>
  );
}
