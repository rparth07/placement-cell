import React from "react";

const about = ({ handleLogout }) => {
  return (
    <section className="about">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default about;
