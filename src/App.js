/*import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Login";
import Hero from "./Hero";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
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
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};
*/
import { functions } from "firebase";
import React, { useState, useEffect } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import NotFoundPage from "./Home/404";
import Hero from "./Home/Hero";
import Sampleresume from "./Home/Sampleresume";
import InterviewQuesions from "./Home/InterviewQuesions";
import Login from "./Login";
import Profile from "./profile/Profile";
import Companylist from "./Home/company/Companylist";
import fire from "./fire";
import Hrdesire from "./Home/company/Hrdesire";
import Talentcornerhrserviices from "./Home/company/Talentcornerhrserviices";
import "./App.css";
import { auth } from "firebase";
import useHistory from "react-router-dom";
import Placementquestions from "./Home/Placementquestions";
import Snaphunt from "./Home/company/Snaphunt";
import Multirecruit from "./Home/company/Multirecruit";
import Nasportz from "./Home/company/Nasportz";

function App() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser(false);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Hero user={user} />
          </Route>
          <Route exact path="/Home">
            <Profile user={user} />
          </Route>
          <Route exact path="/placementquestion">
            <Placementquestions user={user} />
          </Route>
          <Route exact path="/interviewQuesions">
            <InterviewQuesions user={user} />
          </Route>
          <Route exact path="/snaphunt">
            <Snaphunt user={user} />
          </Route>
          <Route exact path="/multirecruit">
            <Multirecruit user={user} />
          </Route>
          <Route exact path="/nasportz">
            <Nasportz user={user} />
          </Route>
          <Route exact path="/hrdesire">
            <Hrdesire user={user} />
          </Route>
          <Route exact path="/talentcornerhrserviices">
            <Talentcornerhrserviices user={user} />
          </Route>

          <Route exact path="/placementquestions">
            <Placementquestions user={user} />
          </Route>
          <Route exact path="/companylist">
            <Companylist user={user} />
          </Route>
          <Route exact path="/sampleresume" component={Sampleresume} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/profile">
            <Profile user={user} />
          </Route>
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
