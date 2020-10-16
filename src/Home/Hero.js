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
    history.push("/");
  };
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
          <Link to="/placementquestion">
            <button>placementquestion</button>
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

          <h2>Welcome to Home Page</h2>
          <button onClick={logout}>Logout</button>
          <br />
        </nav>
      </section>
    </div>
  );
}

export default Hero;
