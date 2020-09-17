import React from "react";
import container from "../../css/basis/container.module.css";
import { Link } from "react-router-dom";
import login from "../../css/login/login.module.css"

export default function LoginContainer(props) {
  return (
    <div className={container.container}>
      <div className={login.wrapper}>
        <h2 className={login.title}>Log In</h2>
        <form>
          <div class={login.form_item}>
            <label for="email">email</label>
            <br></br>
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Email Address"
              className={login.form_input}
            ></input>
          </div>
          <div class={login.form_item}>
            <label for="password">password</label>
            <br></br>
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
              className={login.form_input}
            ></input>
          </div>
          <div class={login.button_panel}>
            <input
              type="submit"
              class="button"
              title="login"
              value="login"
              id={login.submit_button}
            ></input>
          </div>
        </form>
        <div className={login.footer_form}>
          <p>
            ユーザ登録がまだの方は<Link to="/signup">こちら</Link>へ
          </p>
          <p>
            パスワードを忘れた方は<Link to="#">こちら</Link>へ
          </p>
        </div>
      </div>
    </div>
  );
}
