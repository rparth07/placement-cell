import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../fire";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function Hero({ user }) {
  const history = useHistory("");
  //console.log("user->", user);
  if (user === false) {
    //console.log("calling->this state che");
    history.push("/login");
  } else {
    history.push("/Home");
  }

  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    history.push("/login");
  };
  return (
    <div className="homeHeader">
      <section className="about aboutMHt">
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/interviewQuesions">
            <button>InterviewQuesions</button>
          </Link>
          <Link to="/companylist">
            <button>companylist</button>
          </Link>
          <Link to="/sampleresume">
            <button>sampleresume</button>
          </Link>
          <Link to="/placementquestion">
            <button>placementquestion</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <button onClick={logout}>Logout</button>
          <br />
        </nav>
      </section>
    </div>
  );
}

export default Hero;
