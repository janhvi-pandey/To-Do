import React, { useState } from "react";
const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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
  borderRadius: " 10px 0 0 10px ",
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

  const inputTask = (e) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    if (task !== "") {
      setTaskList((currList) => [...currList, task]);
      setTask("");
    }
  };
  const deleteTask = (indexToDelete) => {
    setTaskList((currList) =>
      currList.filter((task, index) => index !== indexToDelete)
    );
  };

  return (
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
              {taskList.map((task, index) => (
                <div style={listStyle} key={index}>
                  <p>{task}</p>
                  <button style={deleteicon} onClick={() => deleteTask(index)}>
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
