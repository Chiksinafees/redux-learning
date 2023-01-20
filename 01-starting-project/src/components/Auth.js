import classes from "./Auth.module.css";
import { authActions } from "../store/StoreRedux";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const Auth = () => {

  const dispatch = useDispatch();

  const authentication = createSelector((currState) => currState.auth.authentication
  );

  const authHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {authentication && <button onClick={authHandler}>Login</button>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
