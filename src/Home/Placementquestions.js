import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
function placementquestions({ user }) {
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
          <Link to="/placementque">
            <button>placementquestion</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </nav>
      </section>
    </div>
  );
}

export default placementquestions;
