import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firestore from "../fire";
import "../App.css";
import "./style.css";
import "./profile.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function Profile({ user }) {
  const history = useHistory("");
  const [profile, setProfile] = useState("");
  /*
  useEffect(() => {
    firestore.collection("profile").onSnapshot((snapshot) => {
      setProfile(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          profile: doc.data(),
        }))
      );
    });
  });*/
  if (user === false) {
    //console.log("calling->this state che");
    history.push("/login");
  }
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
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </nav>

        <div className="about aboutMHt">
          <h1>Profile </h1>
          <div class="container">
            <div class="row">
              <div class="col-md-4 ">
                <div class="row text-left">
                  <img src="./abhi.jpg"></img>
                </div>
                <div class="row text-left">
                  <label class="font-weight-bold Name">EnterName</label>
                  <input width="30px" type="text" placeholder="Full Name" />
                </div>
                <br />
                <div class="row text-left">
                  <label class="font-weight-bold Country">Country</label>
                  <select width="100px" name="Country" id="Country">
                    <option value="">Select Country</option>
                    <option value="">India</option>
                    <option value="">Afghanistan</option>
                    <option value="">Canada </option>
                    <option value="">China</option>
                    <option value="">France</option>
                    <option value="">Germany</option>
                    <option value="">Japan</option>
                  </select>
                </div>
                <br />
                <div class="row text-left">
                  <label class="font-weight-bold City">City</label>
                  <select name="city" class="cities" id="cityId">
                    <option value="">Select City</option>
                    <option value=""> Bhubaneswar</option>
                    <option value=""> Puri</option>
                    <option value="">Cuttack </option>
                    <option value="">Mumbai</option>
                    <option value="">Pune</option>
                    <option value="">Nagpur</option>
                    <option value=""> kochi</option>
                    <option value="Gujrat"> Rajkot</option>
                    <option value="Gujrat">Ahmedabad</option>
                    <option value="Gujrat">Surat</option>
                    <option value="Gujrat">Baroda</option>
                    <option value="Gujrat">Bhavnagar</option>
                    <option value="">Jaypur</option>
                    <option value="">Udaypur</option>
                    <option value="">Jaisalmer</option>
                    <option value="">Lucknow</option>
                    <option value="">Bikaner</option>
                    <option value="">Mirzapur</option>
                    <option value="">Kanpur</option>
                    <option value="">Agra</option>
                    <option value="">Ghaziabad</option>
                  </select>
                </div>
                <br />
                <div class="row text-left">
                  <label class="font-weight-bold Experience">Experience</label>
                  <select>
                    <option>Fresher</option>
                    <option>0-5 years</option>
                    <option>5-10 years</option>
                    <option>More than 10 years</option>
                  </select>
                </div>
                <br />
                <div class="row text-left">
                  <label class="font-weight-light">
                    <label class="font-weight-bold Phone">Phone No.</label>
                    <input
                      type="number"
                      placeholder="Enter your 10 digit phone No."
                    />
                  </label>
                </div>
                <br />
                <div class="row text-left">
                  <label class="font-weight-bold Email">Email</label>
                  <input type="number" placeholder="Enter Email" />
                </div>
              </div>
              <div class="col-md-8 color">
                <div class="row rowcolor">
                  <div class="row ">
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-bold ">Skils</h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <label class="font-weight-light">
                        <input type="text" placeholder="Enter Skils"></input>
                      </label>
                    </div>
                  </div>
                </div>
                <br></br>
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">
                        Job Preference{" "}
                      </h5>
                    </div>
                    <br />
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-6 text-left">
                      <span class="font-weight-bold Industry">Industry:</span>
                      <span>
                        <input type="text" placeholder="Enter Industry" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold Role">Role:</span>
                      <span>
                        <input type="text" placeholder="Job role" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold Loction">Job Loction:</span>
                      <span>
                        <input type="text" placeholder="Enter Job Loction" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        Are you willing to work 6 days per week?:
                      </span>
                      <br />
                      <input
                        type="radio"
                        id="Full time"
                        name="Education Time"
                        value="Full Time"
                      />
                      <label for="yes">yes</label>&nbsp;&nbsp;
                      <input type="radio" />
                      <label for="no">no</label>
                      <br />
                      <span class="font-weight-bold">
                        Are you open to joining early stage startups?
                      </span>
                      <br />
                      <input
                        type="radio"
                        id="Full time"
                        name="Education Time"
                        value="Full Time"
                      />
                      <label for="yes">yes</label>&nbsp;&nbsp;
                      <input type="radio" />
                      <label for="no">no</label>
                      <br />
                    </div>
                    <div class="col-md-6 text-left">
                      <span class="font-weight-bold Job">Job Type:</span>
                      <select>
                        <option>Software Engineer</option>
                        <option>Data Analyst</option>
                        <option>Cyber Security</option>
                        <option>data</option>
                        <option>Bug Hunting</option>
                        <option>Manager</option>
                      </select>
                      <br />
                      <br />
                      <span class="font-weight-bold Shifts">
                        preferred Shifts:
                      </span>
                      <span>
                        <input
                          type="text"
                          placeholder="Enter preferred Shifts"
                        />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold salary">
                        Expected salary:
                      </span>
                      <span>
                        <input
                          type="text"
                          placeholder="Enter Expected salary"
                        />
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">Work Experince</h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light ">
                        <input type="text" placeholder="Enter Work Experince" />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">
                        Eduction Deatails
                      </h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input
                          type="text"
                          placeholder="Enter Eduction Deatails"
                        />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">
                        Course & Certification
                      </h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input
                          type="text"
                          placeholder="Enter Course & Certification"
                        />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">Add project</h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input type="text" placeholder="Enter Add project" />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-bold ">Personal details</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 text-left">
                      <span class="font-weight-bold">Home Town:</span>&nbsp;
                      <span class="Home">
                        <input type="text" placeholder="Enter home town" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold Gender">Gender:</span>
                      <span>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label>Male</label>&nbsp;&nbsp;
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label>Female</label>
                      </span>
                      <br />
                      <span class="font-weight-bold ">Marial status:</span>
                      &nbsp;
                      <span>
                        <input type="text" placeholder="Enter Marial status" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">PassportNo:</span>
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        <input type="text" placeholder="Enter PassportNo" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">Nationality:</span>
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        <input type="text" placeholder="Enter Nationality" />
                      </span>
                      <br />
                      <br />
                    </div>
                    <div class="col-md-6 text-left">
                      <span class="font-weight-bold">Pincode:</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <input type="text" placeholder="Enter Pincode" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">Date Birth:</span>&nbsp;
                      <span>
                        <input type="date" id="birthday" name="birthday" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">Category:</span>
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        <input type="text" placeholder="Enter Category" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">Resident Status:</span>
                      <span>
                        <input
                          type="text"
                          placeholder="Enter Resident Status"
                        />
                      </span>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">
                        Languages known
                      </h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input type="text" placeholder="Enter Languages " />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">
                        Awards & Achievement
                      </h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input type="text" placeholder="Enter Add project " />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">
                        Online Presence(Social life)
                      </h5>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input
                          type="text"
                          placeholder="Enter Add Social account name"
                        />
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="font-weight-bold text-left">Upload</h5>
                    </div>
                    <br />
                    <div class="col-md-12 text-left">
                      <label class="font-weight-light">
                        <input type="file"></input>
                      </label>
                      <br />
                      <br />
                      <center class="button">
                        <input type="submit"></input>
                      </center>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
