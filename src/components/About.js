import React from "react";
import { Link } from "react-router-dom";

function About() {
  const linkStyle = {
    color: "white",
    margin: "0 1em",
    textDecoration: "none",
    marginRight: "2rem",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "0.5em 1.5em",
    margin: "0 0.5em",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "white",
    cursor: "pointer",
    width: "120px",
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
     
      fontFamily: "Arial, sans-serif" 
    }}>
      <nav
        style={{
          backgroundColor: "#000",
          padding: "1em",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/todo" style={linkStyle}>
          ToDo
        </Link>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "70vw",
          height:"70vh",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#111", fontSize: "2.5rem", fontWeight: "bold" }}>
          About the To-Do App
        </h1>
        <p style={{ color: "#111", fontSize: "1.1rem", fontWeight: "520" }}>
          Our To-Do app allows users to effortlessly add and delete tasks from
          their lists. It provides a streamlined experience for managing daily
          responsibilities, ensuring that you stay organized and focused. With
          the ability to prioritize tasks, users can tackle what matters most,
          making productivity both efficient and achievable.
        </p>
        <p style={{ color: "#555", fontSize: "1rem" }}>
          Start managing your time better and enhance your productivity today!
        </p>

       
        <div style={{ marginTop: "1.5em" }}>
          <button style={buttonStyle}>
            <Link to="/todo" style={{ color: "white", textDecoration: "none" }}>
              Go to To-Do
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
