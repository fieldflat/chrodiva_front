import React from "react";
import container from "../../css/basis/container.module.css";
import creator from "../../css/about/creator.module.css";
import hirata_picture from "../../images/hirata_picture.jpg";
import baseball_picture from "../../images/野球アイコン1.png";
import crown_picture from "../../images/クラウンアイコン.png";
import sleep_picture from "../../images/宿泊アイコン2.png";
import enigma_picture from "../../images/enigma-logo.jpg";
import value_picture from "../../images/value.jpeg";
import gg_picture from "../../images/hirata_gg_replace.png";
import ruby_picture from "../../images/ruby.svg";
import react_picture from "../../images/react.svg";
import aws_picture from "../../images/aws-iam.svg";

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

        <div className={creator.favorite}>
          <h3>Favorite</h3>
          <div className={creator.favorite_container}>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Baseball</p>
              <img src={baseball_picture} alt="野球アイコン" />
              <p className={creator.favorite_content}>
                野球が大好きです。兄の影響で3歳ぐらいからバットを握り始め，8歳の頃に少年野球チームに入団。
                それから中学，高校，大学と硬式野球部(中学はシニアリーグ)に入部し，14年間野球をやり続きました。
                打順はクリーンアップを務めることが多く，ポジションはキャッチャーとファーストを主に守っていました。
                好きな球団は中日ドラゴンズで，好きな選手は平田良介選手です(平田繋がりが主な理由)。
              </p>
            </div>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Create Service</p>
              <img src={crown_picture} alt="サービスアイコン" />
              <p className={creator.favorite_content}>
                自分で思い描いたサービスを作るのが大好きです。自分のサービスを使って笑顔になってくれる
                ユーザさんの顔を思い続けながら開発しています。大学時代に，学内価値売買サービスや競技謎解き
                サイトなどを自作し，実際に多くの方が利用してくださったときは，とても嬉しかったです。
                これからも価値のあるサービスを提供できるように頑張ります！
              </p>
            </div>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Chill out at home</p>
              <img src={sleep_picture} alt="睡眠アイコン" />
              <p className={creator.favorite_content}>
                私はとにかくダラダラするのが好きです。出来る事なら一日中家にいながらYoutubeを見たり，ゲームをしていたいです。
                あとは寝るのも大好きです。家のベッドが一番大好きです。将来、家でずっとダラダラしつつ，不労所得で
                生活できることを夢見ています(働け)。誰か，私を養ってください。。
              </p>
            </div>
          </div>
        </div>

        <div className={creator.favorite}>
          <h3>Other Services</h3>
          <div className={creator.favorite_container}>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Value</p>
              <a href="https://value-nagoya.herokuapp.com/" target="_blank">
                <img
                  src={value_picture}
                  alt="value"
                  className={creator.picture}
                />
              </a>
              <p className={creator.favorite_content}>
                名古屋大学生のみが使える価値売買サービス【Value】をリリースいたしました（現在はスマホレイアウトのみ対応です）！
                教科書や文庫本，服などをフリマアプリのように売買することはもちろん，一人暮らしの家の掃除を頼んだり，
                お昼ご飯を買うのがめんどくさいので誰かに依頼したり，勉強でわからないところを教えてくれる人を募集することもできます。
                是非名大生は使ってください！
              </p>
            </div>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Mystery Enigma</p>
              <a href="https://www.mystery-enigma.net/" target="_blank">
                <img
                  src={enigma_picture}
                  alt="Enigma"
                  className={creator.picture}
                />
              </a>
              <p className={creator.favorite_content}>
                オンライン競技謎解きサイト【Mystery
                Enigma】をリリースいたしました。
                制限時間内にどれだけたくさんの謎を解けるか競い合うサイトです。2020年9月15日現在，サイト登録者数が220人を超えました。
                謎解き業界に革命を起こしたいです⚡️
              </p>
            </div>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Gobblet Gobblers </p>
              <a href="https://fieldflat.github.io/gg_replace/" target="_blank">
                <img
                  src={gg_picture}
                  alt="Gobblet Gobblers"
                  className={creator.picture}
                />
              </a>
              <p className={creator.favorite_content}>
                Gobblet
                Gobblersというボードゲームを(少しルールを変えて)実装いたしました！
                シンプルなゲームなのですが，意外と頭を使う，奥が深いゲームとなっています。
                友達と暇な時間ができたときに，一度やってみてください！ハマると思いますよ👌
              </p>
            </div>
          </div>
        </div>

        <div className={creator.favorite}>
          <h3>Skills</h3>
          <div className={creator.favorite_container}>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Backend</p>
              <img
                src={ruby_picture}
                alt="Ruby language"
                className={creator.icon}
              />
              <p className={creator.favorite_content}>
                バックエンドが一番得意です！その中でもRuby on
                Railsが好きで，基本的にバックエンドはRailsで書くことが多いです。
                そのほかにもGolang(gin)やPythonも使ったりします。
              </p>
            </div>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Frontend</p>
              <img
                src={react_picture}
                alt="React language"
                className={creator.icon}
              />
              <p className={creator.favorite_content}>
                基本的なHTML/CSS,
                JSは記述できますが，深い知識を持っているわけではないです(結構調べまくっています)。
                JSはjQuery,
                Reactを主に利用しています。最近はUI/UXに興味を持っていますが，何にせよデザイン能力がないので
                苦戦しております。。
              </p>
            </div>
            <div className={creator.favorite_list}>
              <p className={creator.favorite_title}>Information Security</p>
              <img
                src={aws_picture}
                alt="Security image"
                className={creator.icon}
              />
              <p className={creator.favorite_content}>
                学生時代は情報セキュリティに興味をもち，暗号系の研究をしていました。
                またネットワークについても興味をもち，他研究室で車載ネットワークの研究も行っておりました。
                また数学が好きで，情報理論や暗号系の安全性について数学的に解析しておりました。
              </p>
            </div>
          </div>
        </div>

        <div className={creator.job_container}>
          <h3 className={creator.job_title}>Job invitation</h3>
          <p className={creator.job_content}>
            仕事のお誘い(正社員，副業問わず)については，「tomonori4565[at]@icloud.com」もしくはTwitter(@field_flat)に
            ご連絡いただけると幸いです。よろしくお願いいたします。
          </p>
        </div>
      </div>
    </div>
  );
}
