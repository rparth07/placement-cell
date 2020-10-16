import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import fire from "./fire";
import "./App.css";
import { auth } from "firebase";

function Login() {
  const [email, setEmail] = useState("");
  const history = useHistory("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/home");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/home");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          placeholder="Email addesss"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password</label>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
