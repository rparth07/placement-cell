import React from "react";
import "./snaphunt.css";
function snaphunt({ user }) {
  return (
    <div className="App">
      <div class="container">
        <div class="row title">
          <div class="col-md-12 text-left">
            <h1>Welcome to Snaphunt Pte Ltd</h1>
            <br />
          </div>
        </div>
        <div class="row rowcolor">
          <div class="col-md-12 text-left">
            <b> About Snaphunt Pte Ltd</b>
            <br />
            <p>
              Snaphunt is a specialist recruiting platform that takes the pain
              out of hiring and job searching. Looking for a new role Submit
              your CV on https://snaphunt.com Now live in Singapore, Indonesia,
              Malaysia, India, Hong Kong, Philippines, Vietnam, Thailand,
              Bangladesh & Sri Lanka.
            </p>
            <b>The Employer</b>
            <br />
            <br />
            Our client is a Technology Consulting giant with footprint across
            the 25+ countries and an ever growing workforce.
            <br />
            <br />
            <b>The Offer</b>
            <br />
            <br />
            <p>
              ->Work with industry experts and deliver firm critical projects
              <br />
              ->Excellent scope for career development
              <br />
              ->Attractive compensation
              <br />
              <br />
            </p>
            <b>The Profile</b>
            <br />
            <p>
              ->You possess a degree in Computer Science, Information System or
              related discipline.
              <br />
              ->You have at least 4 years experience working on data
              preparation, data gateway and data warehousing projects.
              <br />
              ->Solid understanding of BI Stack and solid hold of Power BI,
              SSAS, SSRS, SSIS is required.
              <br />
              ->You are familiar with Javascript and its libraries.
              <br />
              ->Knowledge of SQL is required.
              <br />
              ->You can clearly present your findings to senior colleagues.
              <br />
              ->You have good presentation and communication skills.
              <br />
              ->You are analytical by nature and have a critical problem solving
              approach.
            </p>
            <br />
            <a href="/companylist">back</a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default snaphunt;
