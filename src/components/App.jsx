import React, { useState } from "react";
import Item from "./Item";
function App() {
  var [inputValue, setInput] = useState("");
  var [todoItems, setItems] = useState(["first task", "second task"]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={inputValue}
        />
        <button
          onClick={() => {
            setItems((prevValue) => {
              return [...prevValue, inputValue];
            });
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map((item) => (
            <Item value={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
