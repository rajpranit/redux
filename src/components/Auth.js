import { useDispatch } from "react-redux";
import { useRef } from "react";

import classes from "./Auth.module.css";
import { authAction } from "../store/counter-redux";

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    if (emailInput.trim().length === 0) {
      return;
    }

    dispatch(authAction.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailInputRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" ref={passwordInputRef} id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
