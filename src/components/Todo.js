import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const container = {
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const linkStyle = {
  color: "white",
  margin: "0 1em",
  textDecoration: "none",
  marginRight: "2rem",
  fontWeight: "bold",
};
const pageStyle = {
  height: "50vh",
  width: "50vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const inputStyle = {
  width: "60%",
  height: "4vh",
  fontSize: "15px",
  padding: "5px ",
  margin: "3px",
  borderRadius: "10px 0 0 10px",
  minWidth: "20vw",
};
const addbutton = {
  padding: "10.2px ",
  fontSize: "15px",
  borderRadius: "0 10px 10px 0",
  minWidth: "5vw",
};
const listStyle = {
  border: "1px solid black",
  borderRadius: "10px",
  fontSize: "15px",
  margin: "4px",
  padding: "5px 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  minWidth: "25vw",
};
const deleteicon = {
  padding: "10px 20px",
  fontSize: "20px",
  border: "none",
  background: "none",
};

function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetchtask();
  }, []);

  const fetchtask = async () => {
    const response = await fetch("http://localhost:5000/getalltasks");
    const data = await response.json();
    setTaskList(data);
  };

  const inputTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = async () => {
    if (task !== "") {
      const response = await fetch("http://localhost:5000/addtask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task }),
      });
    
      if (response.ok) {
        const newTask = await response.json();
        setTaskList((currList) => [...currList, newTask]); 
        setTask("");
      } else {
        const errorData = await response.json();
        console.error("Error adding task:", errorData.message);
      }
    }
  };

  const deleteTask = async (id) => {
    console.log("Delete task ID:", id);
    try {
      const response = await fetch(`http://localhost:5000/deletetask/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTaskList((currList) => currList.filter((task) => task._id !== id));
      } else {
        const errorData = await response.json();
        console.error("Error deleting task:", errorData.message);
      }
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <div>
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
      <div style={container}>
        <div style={pageStyle}>
          <h1>To Do App</h1>
          <div>
            <input
              type="text"
              style={inputStyle}
              onChange={inputTask}
              value={task}
              placeholder="Enter your task"
            />
            <button style={addbutton} onClick={addTask}>
              Add
            </button>
          </div>

          <div>
            <h2>Your Tasks:</h2>
            {taskList.length === 0 ? (
              <p style={{ fontSize: "1rem" }}>No Tasks added 😢</p>
            ) : (
              <div>
                {taskList.map((task) => (
                  <div style={listStyle} key={task._id}>
                   
                    <p>{task.task}</p>
                    <button
                      style={deleteicon}
                      onClick={() => deleteTask(task._id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
