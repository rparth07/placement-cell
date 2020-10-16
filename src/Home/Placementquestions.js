import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
function placementquestions({ user }) {
  return (
    <div className="homeHeader">
      <section className="about">
        <nav>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/newsfeed">
            <button>newsfeed</button>
          </Link>
          <Link to="/companylist">
            <button>companylist</button>
          </Link>
          <Link to="/sampleresume">
            <button>sampleresume</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          <div className="homeHeader_inputSearch">
            <input type="text" placeholder="search" />
            <SearchIcon className="homeheader_input" />
          </div>
          <div className="homeHeader_icons">
            <section>
              <Avatar className="homeHeader_avatar" alt="" src="" />
              <h3 className="homeHeader_name">{user?.displayName}</h3>
            </section>
            <div className="homeHeader_dash">|</div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default placementquestions;
