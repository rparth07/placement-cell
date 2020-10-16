import React from "react";
import { Link } from "react-router-dom";

function InterviewQuesions({ user }) {
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
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </nav>
      </section>
      <div className="about aboutMHt">
        <center>
          <h1>Interview Question</h1>
          <br />
          <br />
        </center>
        <div className="space">
          Tell Me About Yourself.
          <br />
          <br />
          How Did You Hear About This Position?
          <br />
          <br />
          Why Do You Want to Work at This Company?
          <br />
          <br />
          Why Do You Want This Job?
          <br />
          <br />
          Why Should We Hire You?
          <br />
          <br />
          What Are Your Greatest Strengths?
          <br />
          <br />
          What Do You Consider to Be Your Weaknesses?
          <br />
          <br />
          What Is Your Greatest Professional Achievement?
          <br />
          <br />
          Tell Me About a Challenge or Conflict You’ve Faced at Work, and How
          You Dealt With It.
          <br />
          <br />
          Tell Me About a Time You Demonstrated Leadership Skills.
          <br />
          <br />
          What’s a Time You Disagreed With a Decision That Was Made at Work?
          <br />
          <br />
          Tell Me About a Time You Made a Mistake.
          <br />
          <br />
          Tell Me About a Time You Failed.
          <br />
          <br />
          Why Are You Leaving Your Current Job?
          <br />
          <br />
          Why Were You Fired?
          <br />
          <br />
          Why Was There a Gap in Your Employment?
          <br />
          <br />
          Can You Explain Why You Changed Career Paths?
          <br />
          <br />
          What’s Your Current Salary?
          <br />
          <br />
          What Do You Like Least About Your Job?
          <br />
          <br />
          What Are You Looking for in a New Position?
          <br />
          <br />
          What Type of Work Environment Do You Prefer?
          <br />
          <br />
          What’s Your Management Style?
          <br />
          <br />
          How Would Your Boss and Coworkers Describe You?
          <br />
          <br />
          How Do You Deal With Pressure or Stressful Situations?
          <br />
          <br />
          What Do You Like to Do Outside of Work?
          <br />
          <br />
          Are You Planning on Having Children?
          <br />
          <br />
          How Do You Prioritize Your Work?
          <br />
          <br />
          What Are You Passionate About?
          <br />
          <br />
          What Motivates You?
          <br />
          <br />
          What Are Your Pet Peeves?
          <br />
          <br />
          How Do You Like to Be Managed?
          <br />
          <br />
          Where Do You See Yourself in Five Years?
          <br />
          <br />
          What’s Your Dream Job?
          <br />
          <br />
          What Other Companies Are You Interviewing With?
          <br />
          <br />
          What Makes You Unique?
          <br />
          <br />
          What Should I Know That’s Not on Your Resume?
          <br />
          <br />
          What Would Your First 30, 60, or 90 Days Look Like in This Role?
          <br />
          <br />
          What Are Your Salary Requirements?
          <br />
          <br />
          If You Were an Animal, Which One Would You Want to Be?
          <br />
          <br />
          Sell Me This Pen.
          <br />
          <br />
          Is There Anything Else You’d Like Us to Know?
          <br />
          <br />
          Do You Have Any Questions for Us?
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default InterviewQuesions;
