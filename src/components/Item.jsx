import React, { useState } from "react";

function Item(props) {
  var [taskDone, setTaskDone] = useState(false);

  return (
    <div onClick={() => setTaskDone((prev) => !prev)}>
      <li style={{ textDecoration: taskDone ? "line-through" : "none" }}>
        {props.value}
      </li>
    </div>
  );
}

export default Item;
