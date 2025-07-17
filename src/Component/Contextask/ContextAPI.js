import React, { useContext } from "react";
import CreateData from "./CreateData";

const ContextAPI = () => {
  const content = useContext(CreateData);
  return (
    <div>
      <ul>
        {content.map((item) => (
          <li style={{ textAlign: "left", listStyleType: "number" }}>
            <span>{item.id}</span>
            <span>{item.userId}</span>
            <h6>{item.title}</h6>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <p>Data</p>
    </div>
  );
};

export default ContextAPI;
