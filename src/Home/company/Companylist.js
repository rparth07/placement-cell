import React from "react";
import { Link } from "react-router-dom";
function Companylist({ user }) {
  return (
    <div className="homeHeader">
      <section className="about">
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
        </nav>
      </section>
      <div className="about aboutMHt">
        <center>
          <a href="snaphunt">snaphunt Pte Ltd</a>
          <br />
          <br />
          <a href="multirecruit">Multi Recruit</a>
          <br />
          <br />
          <a href="NASportz ">N A Sportz Interactive Private Ltd</a>
          <br />
          <br />
          <a href="hrdesire">Hrdesire</a>
          <br />
          <br />
          <a href="talentcornerhrserviices">Talentcornerhrserviices</a>
          <br />
          <br />
        </center>
        <a href="Add">Add</a>
        <br />
      </div>
    </div>
  );
}

export default Companylist;
