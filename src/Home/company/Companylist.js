import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
function Companylist({ user }) {
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

        <div className="App">
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
            <a href="Tata">bye bye</a>
            <br />
            <br />
            <a href="Flipcart">Flipcart</a>
            <br />
            <br />
          </center>
          <a href="Add">Add</a>
          <br />
        </div>
      </section>
    </div>
  );
}

export default Companylist;
