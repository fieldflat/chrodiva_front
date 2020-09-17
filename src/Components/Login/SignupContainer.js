import React from "react";
import container from "../../css/basis/container.module.css";
import signup from "../../css/login/signup.module.css";

export default function SignupContainer(props) {
  return (
    <div className={container.container}>
      <div className={signup.wrapper}>
        <h2 className={signup.title}>Sign up</h2>
        <form>
          <div class={signup.form_item}>
            <label for="username">username</label>
            <br></br>
            <input
              type="username"
              name="username"
              required="required"
              placeholder="Username"
              className={signup.form_input}
            ></input>
          </div>
          <div class={signup.form_item}>
            <label for="email">email</label>
            <br></br>
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Email Address"
              className={signup.form_input}
            ></input>
          </div>
          <div class={signup.form_item}>
            <label for="password">password</label>
            <br></br>
            <input
              type="password"
              name="password"
              required="required"
              placeholder="Password"
              className={signup.form_input}
            ></input>
          </div>
          <div class={signup.button_panel}>
            <input
              type="submit"
              class="button"
              title="Sign up"
              value="Sign up"
              id={signup.submit_button}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
