import React from "react";

function profile2() {
  return (
    <div className="profile">
      <center>
        <h1>Profile </h1>
        <div class="profille_container">
          <div class="row">
            <div class="col-md-4">
              <div class="row text-left">
                <img src="./a.png"></img>
              </div>
              <div class="row text-left">
                <b>
                  <label class="font-weight-light">EnterName:</label>
                </b>
                <br />
                <input type="text" placeholder="Full Name" />
              </div>
              <div class="row text-left">
                <br />
              </div>
              <div class="row text-left">
                <label>
                  <b>City:</b>
                </label>
                <br />
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
              <div class="row text-left">
                <br />
                <label>
                  <b>Experience:</b>
                </label>
                <br />
                <select>
                  <option>Fresher</option>
                  <option>0-5 years</option>
                  <option>5-10 years</option>
                  <option>More than 10 years</option>
                </select>
                <br />
              </div>
              <div class="row text-left">
                <br />
                <label>
                  <b>Phone No.</b>
                </label>
                <br />
                <input type="tel" placeholder="enter your 10 digit phone No." />
                <br />
                <br />
              </div>
              <div class="row text-left">
                <b>
                  <label>Email ID</label>
                  <br />
                </b>
                <input type="email" placeholder="abc@gmail.com" />
                <br />
                <br />
              </div>
              <div class="col-md-8 color">
                <div class="row rowcolor">
                  <div class="row ">
                    <div class="col-md-12 text-left">
                      <label>
                        <b>Skils</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input type="text" placeholder="Enter Skils" />
                    </div>
                  </div>
                </div>

                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12"></div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 text-left">
                      <br />
                      <label>
                        <b>Industry:</b>
                      </label>
                      <br />
                      <select>
                        <option>Birla</option>
                        <option>Reliance</option>
                        <option>Tata</option>
                        <option>Apple</option>
                        <option>Amazon</option>
                        <option>Flipcart</option>
                        <option>Microsoft</option>
                      </select>
                      <br />
                      <br />
                      <b>
                        <label>Role:</label>
                      </b>
                      <br />
                      <span>
                        <input type="text" placeholder="Job role" />
                      </span>
                      <br />
                      <br />
                      <b>
                        <span class="font-weight-bold ">Employement type:</span>
                      </b>
                      <br />
                      <span>
                        <input
                          type="text"
                          placeholder="Enter Employement type"
                        />
                      </span>
                      <br />
                      <br />
                      <b>
                        <span class="font-weight-bold ">
                          preferred Loction:
                        </span>
                      </b>
                      <br />
                      <span>
                        <input
                          type="text"
                          placeholder="Enter preferred Loction"
                        />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Are you willing to work 6 days per week?:</b>
                        <br />
                      </span>

                      <span>
                        <input
                          type="radio"
                          id="Full time"
                          name="Education Time"
                          value="Full Time"
                        />
                        <label for="yes">yes</label>
                        <input
                          type="radio"
                          id="Full time"
                          name="Education Time"
                          value="Full Time"
                        />
                        <label for="no">no</label>
                      </span>
                      <br />
                      <br />

                      <span class="font-weight-bold ">
                        <b>Are you open to joiningearly stage startups?</b>
                      </span>
                      <br />
                      <span>
                        <input
                          type="radio"
                          id="Full time"
                          name="Education Time"
                          value="Full Time"
                        />
                        <label for="yes">yes</label>
                        <input
                          type="radio"
                          id="Full time"
                          name="Education Time"
                          value="Full Time"
                        />
                        <label for="no">no</label>
                      </span>
                      <br />
                    </div>
                    <br />
                    <div class="col-md-6 text-left">
                      <b>
                        <span class="font-weight-bold ">Job Type:</span>
                      </b>
                      <br />
                      <span>
                        <select>
                          <option>Software Engineer</option>
                          <option>Data Analyst</option>
                          <option>Cyber Security</option>
                          <option>data</option>
                          <option>Bug Hunting</option>
                          <option>Manager</option>
                        </select>
                      </span>
                      <br />
                      <br />
                      <b>
                        <span class="font-weight-bold">preferred Shifts:</span>
                      </b>
                      <br />
                      <span>
                        <input
                          type="text"
                          placeholder="Enter preferred Shifts"
                        />
                      </span>
                      <br />
                      <br />
                      <b>
                        <span class="font-weight-bold">Expected salary:</span>
                      </b>
                      <br />
                      <span>
                        <input
                          type="text"
                          placeholder="Enter Expected salary"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        <b>Work Experince</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input type="text" placeholder="Enter Work Experince" />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        {" "}
                        <b> Eduction Deatails</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input
                        type="text"
                        placeholder="Enter Eduction Deatails"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        {" "}
                        <b> Course & Certification</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input
                        type="text"
                        placeholder="Enter Course & Certification"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        <b>Add project</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input type="text" placeholder="Enter Add project" />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12 text-left">
                      <h2>
                        <b>
                          <u>Personal details</u>
                        </b>
                      </h2>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 text-left">
                      <span class="font-weight-bold">
                        <b>Home town:</b>
                      </span>
                      <br />
                      <span>
                        <input type="text" placeholder="Enter home town" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Gender:</b>
                      </span>
                      <br />
                      <span>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label>Male</label>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label>Female</label>
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Marial status:</b>
                      </span>
                      <br />
                      <span>
                        <input type="text" placeholder="Enter Marial status" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>PassportNo:</b>
                      </span>
                      <br />
                      <span>
                        <input type="text" placeholder="Enter PassportNo" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Nationality:</b>
                      </span>
                      <br />
                      <span>
                        <input type="text" placeholder="Enter Nationality" />
                      </span>
                      <br />
                      <br />
                    </div>
                    <div class="col-md-6 text-left">
                      <span class="font-weight-bold">
                        <b>Pincode:</b>
                      </span>
                      <br />
                      <span>
                        <input type="text" placeholder="Enter Pincode" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Date Birth:</b>
                      </span>
                      <br />
                      <span>
                        <input type="date" id="birthday" name="birthday" />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Resident Status:</b>
                      </span>
                      <br />
                      <span>
                        <input
                          type="text"
                          placeholder="Enter Resident Status"
                        />
                      </span>
                      <br />
                      <br />
                      <span class="font-weight-bold ">
                        <b>Category?</b>
                      </span>
                      <br />
                      <span>
                        <input type="text" placeholder="Enter Category" />
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        <b>Languages known</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input type="text" placeholder="Enter Languages " />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        <b>Awards & Achievement</b>
                      </label>
                      <br />
                    </div>
                    <div class="col-md-12 text-left">
                      <input type="text" placeholder="Enter Add project " />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        <b>Online Presence(Social life)</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <input
                        type="text"
                        placeholder="Enter Add Social account name"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="row rowcolor">
                  <div class="row">
                    <div class="col-md-12">
                      <label>
                        <b>Resume</b>
                      </label>
                    </div>
                    <div class="col-md-12 text-left">
                      <h5 class="font-weight-light">
                        <input type="file"></input>
                        <input type="submit"></input>
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default profile2;
