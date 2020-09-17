import React from "react";
import footer from "../../css/basis/footer.module.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div>
      <footer className={footer.whole}>
        <div className={footer.footer_div}>
          <h3 className={footer.heading}>chrodivaについて</h3>
          <Link to="/about/creator" className={footer.footer_a}>
            制作者の紹介
          </Link>
          <a
            href="https://linktr.ee/fieldflat"
            className={footer.footer_a}
            target="_blank"
            rel="noopener noreferrer"
          >
            制作者のSNSリンク集
          </a>
        </div>

        <div className={footer.footer_div}>
          <h3 className={footer.heading}>利用規約について</h3>
          <Link to="#" className={footer.footer_a}>
            利用規約
          </Link>
        </div>

        <div className={footer.footer_div}>
          <h3 className={footer.heading}>その他</h3>
          <Link to="/help" className={footer.footer_a}>
            お問い合わせ
          </Link>
        </div>
      </footer>

      <div className={footer.copyright_form}>
        <p className={footer.copyright_text}>
          ©︎2020, HIRATA Tomnori (@field_flat)
        </p>
      </div>
    </div>
  );
}
