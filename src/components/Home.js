import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  const linkStyle = {
    color: 'white',
    margin: '0 1em',
    textDecoration: 'none',
    marginRight:'2rem',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '0.5em 1.5em',
    margin: '0 0.5em',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#000',
    color: 'white',
    cursor: 'pointer',
    width: '120px'
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
   
      <nav style={{ backgroundColor: '#000', padding: '1em', width: '100%', textAlign: 'left' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/todo" style={linkStyle}>ToDo</Link>
      </nav>

  
      <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center',height:'80vh', alignItems: 'center' }}>
        <h1 style={{ color: '#111',fontSize:'2.5rem',fontWeight:'bold' }}>Welcome to To-Do App</h1>
        <p style={{  color: '#111',fontSize:'1.1rem',fontWeight:'520' }}>"Your day organized, one task at a time."</p>
        <p style={{ color: '#555',fontSize:'1rem' }}>Organize your tasks and reclaim your time. Start each day focused and ready to achieve!</p>
        
      
        <div style={{ marginTop: '1.5em' }}>
          <button style={buttonStyle}>Login</button>
          <button style={buttonStyle}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
